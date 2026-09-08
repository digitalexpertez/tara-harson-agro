import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import agriculturalEquipmentOne from "../assets/products/Agricultural Equipments/first.webp";
import agriculturalEquipmentTwo from "../assets/products/Agricultural Equipments/second.webp";
import landLeveler from "../assets/products/Agricultural Land Leveler/agricultural-land-leveler.webp";
import greenLandLeveler from "../assets/products/Agricultural Land Leveler/green-land-leveler.webp";
import ridgerOne from "../assets/products/Agricultural Ridger/Erthingup Soil Harrow In Sugarcane.webp";
import ridgerTwo from "../assets/products/Agricultural Ridger/Sugarcane Tranch Opener.webp";
import ridgerThree from "../assets/products/Agricultural Ridger/sugarcane-trench-opener-ridge.webp";
import ridgerFour from "../assets/products/Agricultural Ridger/Trench Ridger Fertilizer Machine.webp";
import ridgerFive from "../assets/products/Agricultural Ridger/trench-opener-fertilizer-box.webp";
import sprayerOne from "../assets/products/Agricultural Sprayer Pump/mini-tractor-spray-pump.webp";
import sprayerTwo from "../assets/products/Agricultural Sprayer Pump/tractor-operated-spray-pump.webp";
import cultivatorOne from "../assets/products/Agriculture Cultivator/red-sugarcane-cultivator.webp";
import cultivatorTwo from "../assets/products/Agriculture Cultivator/sugarcane-cultivator.webp";
import fertilizerDrill from "../assets/products/Cultivitor And Fertilizer Drill/sugarcane-cultivator-fertilizer-drill-machine.webp";
import discPlough from "../assets/products/Disc Plough/Disc Plough-img.webp";
import pitDiggingMachine from "../assets/products/Pit Digging Machine/sugarcane-trench-planter.webp";
import ratoonOne from "../assets/products/Ratoon Manager/ratoon-management-device.webp";
import ratoonTwo from "../assets/products/Ratoon Manager/red-ratoon-manager-fertilizer-drill-machine.webp";
import ratoonThree from "../assets/products/Ratoon Manager/sugarcane-ratton-manager.webp";
import rigidCultivator from "../assets/products/Rigid Loaded Cultivator/9-tyne-yellow-cultivator.webp";
import seedOne from "../assets/products/Seed Cum Fertilizer Drill/seed-drill-machine.webp";
import seedTwo from "../assets/products/Seed Cum Fertilizer Drill/seed-drill-machine2.webp";
import seedThree from "../assets/products/Seed Cum Fertilizer Drill/tara-seed-drill-machine.webp";
import springCultivator from "../assets/products/Spring Loaded Cultivator/9-tyne-grey-cultivator.webp";
import stubbleOne from "../assets/products/Sugarcane Stubble Shaver/one.webp";
import stubbleTwo from "../assets/products/Sugarcane Stubble Shaver/two.webp";
import sugarcanePlanter from "../assets/products/Tranch Sugarcane Cutter Planter/sugarcane-trench-planter.webp";
import "./product.css";

const categories = [
  {
    slug: "agricultural-equipments",
    name: "Agricultural Equipments",
    description: "Reliable equipment for everyday farm operations.",
    products: [
      { name: "Agricultural Equipment", image: agriculturalEquipmentOne },
      { name: "Agricultural Equipment Plus", image: agriculturalEquipmentTwo },
    ],
  },
  {
    slug: "agricultural-land-leveler",
    name: "Agricultural Land Leveler",
    description: "Prepare smooth, even fields for efficient cultivation.",
    products: [
      { name: "Agricultural Land Leveler", image: landLeveler },
      { name: "Green Land Leveler", image: greenLandLeveler },
    ],
  },
  {
    slug: "agricultural-ridger",
    name: "Agricultural Ridger",
    description: "Create consistent ridges and furrows for better planting.",
    products: [
      { name: "Soil Harrow Ridger", image: ridgerOne },
      { name: "Sugarcane Trench Opener", image: ridgerTwo },
      { name: "Trench Opener Ridge", image: ridgerThree },
      { name: "Trench Ridger Fertilizer Machine", image: ridgerFour },
      { name: "Trench Opener Fertilizer Box", image: ridgerFive },
    ],
  },
  {
    slug: "agricultural-sprayer-pump",
    name: "Agricultural Sprayer Pump",
    description: "Cover crops efficiently with dependable spray solutions.",
    products: [
      { name: "Mini Tractor Spray Pump", image: sprayerOne },
      { name: "Tractor Operated Spray Pump", image: sprayerTwo },
    ],
  },
  {
    slug: "agriculture-cultivator",
    name: "Agriculture Cultivator",
    description: "Break and prepare soil with field-ready cultivators.",
    products: [
      { name: "Red Sugarcane Cultivator", image: cultivatorOne },
      { name: "Sugarcane Cultivator", image: cultivatorTwo },
    ],
  },
  {
    slug: "cultivator-and-fertilizer-drill",
    name: "Cultivator And Fertilizer Drill",
    description: "Cultivate soil and place fertilizer in one operation.",
    products: [{ name: "Cultivator Fertilizer Drill", image: fertilizerDrill }],
  },
  {
    slug: "disc-plough",
    name: "Disc Plough",
    description: "Turn and prepare tough soil for the next crop cycle.",
    products: [{ name: "Disc Plough", image: discPlough }],
  },
  {
    slug: "pit-digging-machine",
    name: "Pit Digging Machine",
    description: "Make planting pits quickly and consistently.",
    products: [{ name: "Pit Digging Machine", image: pitDiggingMachine }],
  },
  {
    slug: "ratoon-manager",
    name: "Ratoon Manager",
    description: "Support productive sugarcane ratoon crop management.",
    products: [
      { name: "Ratoon Management Device", image: ratoonOne },
      { name: "Ratoon Manager Fertilizer Drill", image: ratoonTwo },
      { name: "Sugarcane Ratoon Manager", image: ratoonThree },
    ],
  },
  {
    slug: "rigid-loaded-cultivator",
    name: "Rigid Loaded Cultivator",
    description: "Handle demanding soil preparation with rigid strength.",
    products: [{ name: "9 Tyne Yellow Cultivator", image: rigidCultivator }],
  },
  {
    slug: "seed-cum-fertilizer-drill",
    name: "Seed Cum Fertilizer Drill",
    description: "Place seed and fertilizer accurately in a single pass.",
    products: [
      { name: "Seed Drill Machine", image: seedOne },
      { name: "Seed Drill Machine 2", image: seedTwo },
      { name: "Tara Seed Drill Machine", image: seedThree },
    ],
  },
  {
    slug: "spring-loaded-cultivator",
    name: "Spring Loaded Cultivator",
    description: "Cultivate confidently across changing field conditions.",
    products: [{ name: "9 Tyne Grey Cultivator", image: springCultivator }],
  },
  {
    slug: "sugarcane-stubble-shaver",
    name: "Sugarcane Stubble Shaver",
    description: "Clear sugarcane stubble and keep fields ready for regrowth.",
    products: [
      { name: "Sugarcane Stubble Shaver One", image: stubbleOne },
      { name: "Sugarcane Stubble Shaver Two", image: stubbleTwo },
    ],
  },
  {
    slug: "trench-sugarcane-cutter-planter",
    name: "Trench Sugarcane Cutter Planter",
    description: "Cut and plant sugarcane in an efficient trench operation.",
    products: [{ name: "Sugarcane Trench Planter", image: sugarcanePlanter }],
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ProductCard = ({ categorySlug, product }) => (
  <Link
    className="product-card category-product-card"
    to={`/products/${categorySlug}/${slugify(product.name)}`}
  >
    <div className="product-card-media">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-card-content">
      <div className="product-card-meta">
        <span>Farm equipment</span>
      </div>
      <h3>{product.name}</h3>
      <span className="product-card-link">
        View product <span aria-hidden="true">→</span>
      </span>
    </div>
  </Link>
);

const EnquiryModal = ({ productName, onClose }) => (
  <div className="enquiry-modal-backdrop" role="presentation">
    <div
      className="enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <button
        className="enquiry-modal-close"
        type="button"
        onClick={onClose}
        aria-label="Close enquiry popup and open WhatsApp"
      >
        ×
      </button>
      <p className="section-title">Talk to Tara Harson Agro</p>
      <h2 id="enquiry-modal-title">Enquire about {productName}</h2>
      <p>
        Call our team now for availability, pricing, and the right setup for
        your farm.
      </p>
      <a className="enquiry-call-button" href="tel:+919758783063">
        Call +91 97587 83063
        <span aria-hidden="true">→</span>
      </a>
      <a className="enquiry-whatsapp-link" href="https://wa.me/919719102062">
        Prefer messaging? Open WhatsApp
      </a>
    </div>
  </div>
);

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const category = categories.find((item) => item.slug === categorySlug);
  const selectedProduct = category?.products.find(
    (item) => slugify(item.name) === productSlug,
  );

  if (categorySlug && (!category || (productSlug && !selectedProduct))) {
    return (
      <section className="product-section product-not-found">
        <h2>Product category not found</h2>
        <Link to="/products">Back to products</Link>
      </section>
    );
  }

  if (category && selectedProduct) {
    const relatedProducts = category.products.filter(
      (item) => item.name !== selectedProduct.name,
    );

    return (
      <section className="product-section product-detail-page" id="products">
        <Link className="back-link" to={`/products/${category.slug}`}>
          ← {category.name}
        </Link>
        <div className="product-detail">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <div className="product-detail-content">
            <p className="section-title">{category.name}</p>
            <h1 className="section-subtitle">{selectedProduct.name}</h1>
            <p className="section-desc">
              {category.description} Talk to our team to find the right
              configuration for your farm.
            </p>
            <button
              className="detail-cta"
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
            >
              Enquire now <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        {isEnquiryOpen && (
          <EnquiryModal
            productName={selectedProduct.name}
            onClose={() => {
              window.location.href = "https://wa.me/919719102062";
            }}
          />
        )}
        {relatedProducts.length > 0 && (
          <>
            <h2 className="related-title">More in this category</h2>
            <div className="product-cards">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  categorySlug={category.slug}
                  product={product}
                />
              ))}
            </div>
          </>
        )}
      </section>
    );
  }

  if (category) {
    return (
      <section className="product-section category-page" id="products">
        <Link className="back-link" to="/products">
          ← All categories
        </Link>
        <p className="section-title">
          {category.products.length} PRODUCTS IN CATEGORY
        </p>
        <h1 className="section-subtitle">{category.name}</h1>
        <p className="section-desc">{category.description}</p>
        <div className="product-cards">
          {category.products.map((product) => (
            <ProductCard
              key={product.name}
              categorySlug={category.slug}
              product={product}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="product-section" id="products">
      <p className="section-title">TARA HARSON RANGE</p>
      <h1 className="section-subtitle">
        Equipment for <span>every field</span>
      </h1>
      <p className="section-desc">
        Choose a product category to view all machines available in that range.
      </p>
      <div className="product-cards">
        {categories.map((item) => (
          <Link
            className="product-card category-card"
            key={item.slug}
            to={`/products/${item.slug}`}
          >
            <div className="product-card-media">
              <img src={item.products[0].image} alt={item.name} />
            </div>
            <div className="product-card-content">
              <div className="product-card-meta">
                <span>{item.products.length} products</span>
              </div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span className="product-card-link">View category →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
