"""Overwrite product images with transparent PNG responses from FAPIhub."""

import os
import sys
from pathlib import Path

import requests


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
PRODUCTS_DIR = Path(__file__).resolve().parent / "assets" / "products"
API_URL = "https://fapihub.com/v2/rembg/"
MODEL = "falcon"
PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
START_AFTER = Path("Ratoon Manager/20250320_124636.jpg.jpeg")


def remove_background(image_path, api_key):
    with image_path.open("rb") as image_file:
        response = requests.post(
            API_URL,
            headers={"ApiKey": api_key},
            files={"image": image_file},
            data={"model": MODEL},
            timeout=120,
        )

    if not response.ok:
        try:
            details = response.json().get("errors", response.text)
        except ValueError:
            details = response.text
        raise RuntimeError(f"FAPIhub returned HTTP {response.status_code}: {details}")

    image_path.write_bytes(response.content)


def is_processed(image_path):
    with image_path.open("rb") as image_file:
        return image_file.read(len(PNG_SIGNATURE)) == PNG_SIGNATURE


def main():
    api_key = os.environ.get("FAPIHUB_API_KEY")
    if not api_key:
        print("Set FAPIHUB_API_KEY before running this script.", file=sys.stderr)
        return 1

    if not PRODUCTS_DIR.is_dir():
        print(f"Input directory does not exist: {PRODUCTS_DIR}", file=sys.stderr)
        return 1

    image_paths = sorted(
        path for path in PRODUCTS_DIR.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )
    if not image_paths:
        print(f"No supported images found in {PRODUCTS_DIR}")
        return 0

    processed = 0
    skipped = 0
    start_processing = False
    for image_path in image_paths:
        relative_path = image_path.relative_to(PRODUCTS_DIR).as_posix()
        if not start_processing:
            if relative_path == START_AFTER.as_posix():
                start_processing = True
            skipped += 1
            print(f"Skipping before start marker: {image_path}")
            continue

        if is_processed(image_path):
            skipped += 1
            print(f"Skipping processed image: {image_path}")
            continue

        try:
            remove_background(image_path, api_key)
        except (OSError, requests.RequestException, RuntimeError) as error:
            print(f"Failed: {image_path}: {error}", file=sys.stderr)
            continue

        processed += 1
        print(f"Overwrote: {image_path}")

    print(
        f"Done. Processed {processed}, skipped {skipped}, found {len(image_paths)}."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())