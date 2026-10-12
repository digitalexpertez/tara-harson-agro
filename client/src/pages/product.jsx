import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import agriculturalEquipmentOne from "../assets/output/Agricultural Equipments/first.png";
import landLeveler from "../assets/output/Agricultural Land Leveler/agricultural-land-leveler.png";
import greenLandLeveler from "../assets/output/Agricultural Land Leveler/green-land-leveler.png";
import ridgerTwo from "../assets/output/Agricultural Ridger/Sugarcane Tranch Opener.png";
import ridgerThree from "../assets/output/Agricultural Ridger/sugarcane-trench-opener-ridge.png";
import ridgerFour from "../assets/output/Agricultural Ridger/Trench Ridger Fertilizer Machine.png";
import ridgerFive from "../assets/output/Agricultural Ridger/trench-opener-fertilizer-box.png";
import sprayerOne from "../assets/output/Agricultural Sprayer Pump/agricultural-sprayer-pump-01.png";
import sprayerTwo from "../assets/output/Agricultural Sprayer Pump/tractor-operated-spray-pump.png";
import cultivatorOne from "../assets/products/Agriculture Cultivator/red-sugarcane-cultivator.webp";
import fertilizerDrill from "../assets/output/Cultivitor And Fertilizer Drill/sugarcane-cultivator-fertilizer-drill-machine.png";
import discPlough from "../assets/products/Disc Plough/Disc Plough-img.webp";
import pitDiggingMachineCover from "../assets/output/Pit Digging Machine/Sugarcane cutter Planter.png";
import pitDiggingMachine from "../assets/output/Pit Digging Machine/sugarcane-trench-planter.png";
import ratoonOne from "../assets/output/Ratoon Manager/ratoon-management-device.png";
import ratoonTwo from "../assets/output/Ratoon Manager Fertilizer Drill/red-ratoon-manager-fertilizer-drill-machine.png";
import ratoonThree from "../assets/output/Ratoon Manager/sugarcane-ratton-manager.png";
import conventionalRatoonManagerOne from "../assets/output/Conventional Model Ratoon manager/Conventional Model Ratoon manager01.png";
import conventionalRatoonManager from "../assets/output/Conventional Model Ratoon manager/Conventional Model Ratoon manager06.png";
import rigidCultivatorYellow from "../assets/output/Rigid Loaded Cultivator/9-tyne-yellow-cultivator - Copy.png";
import rigidCultivatorBlue from "../assets/output/Rigid Loaded Cultivator/agriculture-cultivator-06.png";
import rigidCultivatorNew from "../assets/output/Rigid Loaded Cultivator/agriculture-cultivator-13.png";
import rigidCultivatorRed from "../assets/products/Agriculture Cultivator/sugarcane-cultivator.png";
import seedOne from "../assets/products/Seed Cum Fertilizer Drill/seed-drill-machine.webp";
import seedTwo from "../assets/products/Seed Cum Fertilizer Drill/seed-drill-machine2.webp";
import seedThree from "../assets/output/Seed Cum Fertilizer Drill/seed-cum-fertilizer-drill-04.png";
import springCultivator from "../assets/products/Spring Loaded Cultivator/9-tyne-grey-cultivator.webp";
import stubbleOne from "../assets/output/Sugarcane Stubble Shaver/one.png";
import stubbleTwo from "../assets/output/Sugarcane Stubble Shaver/two.png";
import "./product.css";

const sugarcanePlanter = pitDiggingMachine;

const originalProductAssets = import.meta.glob(
  "../assets/products/**/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true, query: "?url", import: "default" },
);
const earthingUpHarrowRidgerAssets = import.meta.glob(
  "../assets/products/Earthing Up Harrow Ridger/*",
  { eager: true, query: "?url", import: "default" },
);
const processedProductAssets = import.meta.glob("../assets/output/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const assetStem = (assetPath) =>
  assetPath
    .replace(/^.*\/assets\/(?:products|output)\//, "")
    .replace(/\.[^.]+$/, "");

const processedAssetsByStem = Object.fromEntries(
  Object.entries(processedProductAssets).map(([assetPath, image]) => [
    assetStem(assetPath),
    image,
  ]),
);

const productAssets = Object.fromEntries(
  [
    ...Object.entries(originalProductAssets),
    ...Object.entries(earthingUpHarrowRidgerAssets),
  ].map(([assetPath, image]) => [
    assetPath,
    processedAssetsByStem[assetStem(assetPath)] || image,
  ]),
);

const excludedProductNames = new Set(["Sugarcane Trench Cutter Planter 17"]);
const excludedEarthingUpRidgerProductNames = new Set([
  "Sugarcane Tranch Opener",
  "Sugarcane Trench Opener",
  "Sugarcane Trench Opener Ridge",
  "Trench Ridger Fertilizer Machine",
  "Trench Opener Fertilizer Box",
]);

const pairedRowCutterPlanterDescription = [
  "The Paired Row sugarcane cutter planter by Tara Harson Agro is an advanced agricultural machine designed to simplify and modernize sugarcane cultivation. Built for efficiency, precision, and durability, this planter enables farmers to perform multiple planting operations in a single pass, saving time, labor, and operational costs while ensuring higher crop productivity.",
  "This machine automatically performs essential farming tasks such as furrow opening, cutting and placing sugarcane setts, fertilizer application, and soil covering with accurate spacing and depth. By maintaining uniform planting patterns, it promotes better germination, stronger root development, and consistent crop growth across the field. Modern sugarcane planters are widely adopted in mechanized farming because they significantly reduce manual effort while improving yield quality and farm efficiency.",
  "The Paired Row Sugarcane Cutter Planter by Tara Harson Agro is an advanced agricultural implement designed to improve efficiency and productivity in modern sugarcane cultivation. Engineered with precision technology, this machine performs multiple plantation operations in a single pass, including cutting sugarcane setts, placing them in paired rows, fertilizer application, and soil covering.",
];

const pairedRowRidgerFertilizerDrillDescription = [
  "The Paired Row Ridger with Fertilizer Drill by Tara Harson Agro is a modern agricultural implement designed to streamline ridge formation and fertilizer application in a single pass. Built with precision engineering, this machine creates paired ridges for crops like sugarcane, maize, and cotton while simultaneously drilling fertilizer into the soil.",
  "Its dual-function design reduces labor, saves time, and ensures uniform crop growth. The ridger blades are adjustable for different row spacings, and the fertilizer drill system is calibrated for accurate dosage, making it ideal for sustainable and high-yield farming.",
];

const sugarcaneTrenchOpenerDescription = [
  "The Sugarcane Trench Opener by Tara Harson Agro is a highly efficient agricultural implement designed for precise trench formation in modern farming operations. Built with strong and durable materials, this machine helps farmers create uniform trenches quickly and accurately, making it ideal for crops like sugarcane, vegetables, and plantation farming where proper spacing and depth are essential.",
  "This implement is specially engineered to open straight and consistent trenches with controlled depth, ensuring better soil aeration, improved water management, and enhanced root development. Its tractor-mounted design allows smooth operation across different soil types while reducing manual labor and operational time compared to traditional trenching methods.",
];

const ringPitDiggerMachineDescription = [
  "The Ring Pit Digger Machine by Tara Harson Agro is a robust and efficient agricultural implement designed for creating uniform ring pits in the field. Built with high-quality materials, this machine ensures consistent pit dimensions and depth, making it ideal for planting trees, shrubs, and other crops that require precise hole placement.",
  "This machine is engineered to dig ring pits quickly and accurately, reducing the time and effort required for manual digging. Its sturdy construction allows it to handle various soil conditions, ensuring reliable performance across different farming environments.",
];

const ratoonManagerFertilizerDrillDescription = [
  "The Ratoon Manager Fertilizer Drill by Tara Harson Agro is a specialized agricultural implement designed for ratoon sugarcane cultivation. Engineered with precision, this machine performs multiple operations in a single pass — cutting old stubbles, loosening soil, and simultaneously applying fertilizer near the root zone.",
  "Its innovative design ensures better ratoon crop growth, improved nutrient absorption, and reduced labor costs. The drill system is calibrated for accurate fertilizer placement, while the blades and ridgers manage soil aeration and stubble removal effectively.",
];

const interRowCultivatorDescription = [
  "The Agriculture Cultivator by Tara Harson Agro is a reliable and efficient agricultural implement designed for performing intercultural operations between crop rows. Engineered for precision and durability, this machine helps farmers maintain healthy soil conditions by removing weeds, loosening soil, and improving aeration without disturbing standing crops.",
  "This cultivator effectively breaks soil crust and controls weed growth, allowing better moisture retention and improved nutrient absorption. Regular inter-row cultivation enhances root development and promotes uniform crop growth, contributing to higher productivity and improved crop quality.",
  "Built with a strong and heavy-duty frame, the implement performs smoothly across different soil types and farming conditions. Its tractor-mounted design enables easy operation, faster field coverage, and reduced dependence on manual labor, making it a cost-effective solution for modern farming practices.",
];

const agriculturalEquipmentDescription = [
  "The Sugarcane Cutter Planter by Tara Harson Agro is an advanced agricultural machine designed to simplify and modernize sugarcane cultivation. Built for efficiency, precision, and durability, this planter enables farmers to perform multiple planting operations in a single pass, saving time, labor, and operational costs while ensuring higher crop productivity.",
  "This machine automatically performs essential farming tasks such as furrow opening, cutting and placing sugarcane setts, fertilizer application, and soil covering with accurate spacing and depth. By maintaining uniform planting patterns, it promotes better germination, stronger root development, and consistent crop growth across the field. Modern sugarcane planters are widely adopted in mechanized farming because they significantly reduce manual effort while improving yield quality and farm efficiency.",
];

const agriculturalLandLevelerDescription = [
  "The Agricultural Land Leveler by Tara Harson Agro is a robust tractor-mounted implement designed to prepare farmland for efficient irrigation and high-yield cultivation. Built with heavy-duty steel and precision engineering, this machine redistributes soil evenly across the field, creating a smooth and leveled surface.",
  "In a single operation, the Land Leveler enhances water distribution, reduces soil erosion, and ensures uniform crop growth. Its adjustable blade width and hydraulic control system make it suitable for diverse soil types and farming conditions.",
];

const earthingUpHarrowRidgerDescription = [
  "The Earthing Up Harrow Ridger by Tara Harson Agro is a multi-purpose tractor-mounted implement designed for row crops. Engineered with precision blades and adjustable settings, this machine performs dual operations in a single pass — creating ridges and earthing up soil around crop roots.",
  "Its robust design ensures better root development, improved moisture retention, and enhanced crop stability. The Ridger is compatible with medium to heavy tractors and can be adjusted for different row spacings.",
];

const agriculturalSprayerPumpDescription = [
  "The Agricultural Sprayer Pump by Tara Harson Agro is a dependable crop protection implement designed for efficient field spraying and uniform chemical application. Built for consistent performance, this pump helps farmers cover crops quickly while improving spray accuracy and reducing wastage.",
  "Its compact design and reliable pump operation support modern crop care workflows across varied field conditions. The sprayer helps reduce manual effort and saves time while improving productivity and crop quality.",
];

const discRidgerDescription = [
  "The Disc Ridger by Tara Harson Agro is a heavy-duty implement designed for efficient ridge formation in modern farming. Equipped with concave steel discs, the machine cuts through soil and throws it sideways to create uniform ridges. Its adjustable disc angle and spacing make it suitable for multiple crops and soil conditions.",
  "This implement reduces manual labor, saves time, and ensures better crop establishment by providing proper root coverage and moisture retention.",
];

const sugarcaneEarthingUpRidgerDescription = [
  "The Sugarcane Earthing Up Ridger by Tara Harson Agro is a specialized tractor-mounted implement designed to perform ridge formation and earthing-up operations in sugarcane cultivation. Built with precision blades and adjustable row spacing, this machine covers crop roots with soil, strengthens plant support, and improves irrigation efficiency.",
  "Its robust design ensures better root development, enhanced moisture retention, and reduced weed growth. The Ridger is engineered for medium to heavy tractors, making it ideal for large-scale sugarcane farming.",
];

const sugarcaneEarthingUpWithFertilizerDrillDescription = [
  "The Sugarcane Earthing Up with Fertilizer Drill by Tara Harson Agro is a modern agricultural implement that combines ridge formation, earthing-up, and fertilizer application in a single pass. Designed for sugarcane cultivation, this machine covers crop roots with soil to strengthen plant support while simultaneously drilling fertilizer into the root zone for balanced nutrition.",
  "Its dual-function design saves time, reduces labor, and ensures uniform crop growth. Adjustable blades and calibrated fertilizer drill settings make it suitable for different row spacings and soil conditions.",
];

const napierGrassPlanterDescription = [
  "The Napier Grass Planter by Tara Harson Agro is an advanced tractor-mounted implement designed for high-density fodder cultivation. It automates the process of planting Napier grass slips in uniform rows, ensuring proper spacing, fertilizer placement, and soil coverage.",
  "This planter reduces manual labor, saves time, and ensures better germination and crop establishment. Its adjustable row spacing and fertilizer drill system make it suitable for different soil types and farm sizes.",
];

const agricultureCultivatorDescription = [
  "The Agriculture Cultivator by Tara Harson Agro is a reliable and efficient agricultural implement designed for performing intercultural operations between crop rows. Engineered for precision and durability, this machine helps farmers maintain healthy soil conditions by removing weeds, loosening soil, and improving aeration without disturbing standing crops.",
  "This cultivator effectively breaks soil crust and controls weed growth, allowing better moisture retention and improved nutrient absorption. Regular inter-row cultivation enhances root development and promotes uniform crop growth, contributing to higher productivity and improved crop quality.",
  "Built with a strong and heavy-duty frame, the implement performs smoothly across different soil types and farming conditions. Its tractor-mounted design enables easy operation, faster field coverage, and reduced dependence on manual labor, making it a cost-effective solution for modern farming practices.",
];

const cultivatorAndFertilizerDrillDescription = [
  "The Sugarcane Cultivator and Fertilizer Drill by Tara Harson Agro is a field-ready implement designed to prepare soil and place fertilizer in a single operation. Its strong build and precise drill mechanism support efficient cultivation while reducing extra passes in the field.",
  "This machine improves fertilizer placement accuracy and helps save time, fuel, and labor during crop preparation. The integrated design supports better soil conditioning and more balanced nutrient delivery for healthier crop growth.",
];

const discPloughDescription = [
  "The Disc Plough by Tara Harson Agro is a robust soil preparation implement designed for cutting, turning, and loosening the field surface. Its sturdy disc assembly helps farmers handle tougher soil conditions with greater consistency and efficiency.",
  "This plough supports deeper soil inversion and smooth field preparation, improving aeration and helping create a stronger base for the next crop cycle. Its tractor-mounted build makes it suitable for reliable and durable farm operations.",
];

const conventionalRatoonManagerDescription = [
  "The Conventional Model Ratoon Manager by Tara Harson Agro is a dependable field implement designed to support sugarcane ratoon management. It is built for consistent field operations that help farmers manage crop regeneration efficiently after harvest.",
  "This machine supports ratoon crop care through controlled soil movement and crop management, helping maintain crop health while reducing manual effort in field operations.",
];

const ratoonManagerDescription = [
  "The Ratoon Manager by Tara Harson Agro is a practical agricultural implement designed to improve sugarcane ratoon crop management. It supports operations that help maintain crop health, reduce stubble burden, and improve field preparation between harvest cycles.",
  "Its reliable structure and field-ready design help farmers manage ratoon fields more efficiently while saving labor and improving crop revival potential.",
];

const rigidLoadedCultivatorDescription = [
  "The Rigid Loaded Cultivator by Tara Harson Agro is a sturdy and dependable soil-working implement built for tough agricultural conditions. It helps loosen and prepare soil with consistent field coverage across demanding crop operations.",
  "Its rigid frame and durable design make it suitable for deeper field work, better soil aeration, and improved crop establishment in challenging soil conditions.",
];

const seedCumFertilizerDrillDescription = [
  "The Seed Cum Fertilizer Drill by Tara Harson Agro is an accurate seeding and fertilizer placement machine designed to improve row planting efficiency. It enables farmers to place seed and fertilizer together in a balanced and controlled manner.",
  "This machine helps ensure uniform spacing, consistent seed depth, and reliable fertilizer placement, improving crop emergence and field productivity while reducing wastage.",
];

const springLoadedCultivatorDescription = [
  "The Spring Loaded Cultivator by Tara Harson Agro is an efficient field implement designed to loosen soil and manage crop rows with flexible field performance. Its spring-loaded structure supports smooth operation across changing field conditions.",
  "This cultivator helps improve soil structure, control weeds, and support crop growth through reliable intercultural field work with reduced manual effort.",
];

const trenchSugarcaneCutterPlanterDescription = [
  "The Trench Sugarcane Cutter Planter by Tara Harson Agro is an advanced multi-functional agricultural implement designed to simplify and modernize sugarcane plantation. Engineered for efficiency and precision, this machine performs cutting and planting operations simultaneously, ensuring faster plantation with uniform spacing and depth.",
];

const categoryPageDescriptions = {
  "agricultural-equipments": agriculturalEquipmentDescription,
  "agricultural-land-leveler": agriculturalLandLevelerDescription,
  "agricultural-ridger": earthingUpHarrowRidgerDescription,
  "sugarcane-trench-opener": sugarcaneTrenchOpenerDescription,
  "paired-row-sugarcane-cutter-planter": pairedRowCutterPlanterDescription,
  "Paired Row Ridzer with fertilizer drill machine":
    pairedRowRidgerFertilizerDrillDescription,
  "agricultural-sprayer-pump": agriculturalSprayerPumpDescription,
  "agriculture-cultivator": agricultureCultivatorDescription,
  "cultivator-and-fertilizer-drill": cultivatorAndFertilizerDrillDescription,
  "disc-plough": discPloughDescription,
  "disc-dollar": discRidgerDescription,
  "napier-grass-planter": napierGrassPlanterDescription,
  "sugarcane-earthing-up-ridzer": sugarcaneEarthingUpRidgerDescription,
  "sugarcane-earthing-up-with-fertilizer-drill":
    sugarcaneEarthingUpWithFertilizerDrillDescription,
  "conventional-model-ratoon-manager": conventionalRatoonManagerDescription,
  "ratoon-manager": ratoonManagerDescription,
  "ratoon-manager-fertilizer-drill": ratoonManagerFertilizerDrillDescription,
  "rigid-loaded-cultivator": rigidLoadedCultivatorDescription,
  "seed-cum-fertilizer-drill": seedCumFertilizerDrillDescription,
  "spring-loaded-cultivator": springLoadedCultivatorDescription,
  "ring-pit-digger-machine": ringPitDiggerMachineDescription,
  "sugarcane-trench-cutter-planter": trenchSugarcaneCutterPlanterDescription,
};

const productDescription = (name) => {
  const productName = name.toLowerCase();

  if (productName.includes("sprayer") || productName.includes("spray pump")) {
    return "A dependable spray pump for even and efficient crop coverage.";
  }

  if (productName.includes("planter")) {
    return "A practical planter for accurate and consistent sugarcane planting.";
  }

  if (productName.includes("ridger") || productName.includes("ridzer")) {
    return "A reliable ridger for creating clean, uniform field rows.";
  }

  if (productName.includes("trench") || productName.includes("opener")) {
    return "A sturdy machine for opening clean trenches for sugarcane planting.";
  }

  if (productName.includes("leveler")) {
    return "A field leveler for preparing smooth and even soil surfaces.";
  }

  if (productName.includes("cultivator")) {
    return "A field-ready cultivator for loosening and preparing the soil.";
  }

  if (productName.includes("drill")) {
    return "A precise drill for consistent seed and fertilizer placement.";
  }

  if (productName.includes("plough") || productName.includes("harrow")) {
    return "A strong soil-preparation implement for efficient field work.";
  }

  if (productName.includes("ratoon") || productName.includes("stubble")) {
    return "A dependable machine for productive sugarcane ratoon management.";
  }

  return `A reliable ${name.toLowerCase()} for efficient farm operations.`;
};

const categories = [
  {
    slug: "agricultural-equipments",
    name: "Sugarcane Cutter Planter",
    description: "Reliable equipment for everyday farm operations.",
    products: [{ name: "Sugarcane Cutter Planter", image: sugarcanePlanter }],
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
    name: "Earthing Up Harrow Ridger",
    description: "Create consistent ridges and furrows for better planting.",
    products: [],
  },
  {
    slug: "sugarcane-trench-opener",
    name: "Sugarcane Trench Opener",
    description: "Open clean, consistent trenches for sugarcane planting.",
    products: [
      { name: "Sugarcane Trench Opener", image: ridgerTwo },
      { name: "Trench Opener Ridge", image: ridgerThree },
      { name: "Sugarcane Trench Opener", image: ridgerFive },
    ],
  },
  {
    slug: "Paired Row Ridzer with fertilizer drill machine",
    name: "Paired Row Ridzer with fertilizer drill machine",
    description: "Open clean, consistent trenches for sugarcane planting.",
    products: [{ name: "Trench Ridger Fertilizer Machine", image: ridgerFour }],
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
    products: [{ name: "Red Sugarcane Cultivator", image: cultivatorOne }],
  },
  {
    slug: "cultivator-and-fertilizer-drill",
    name: "Sugarcane Cultivator And Fertilizer Drill",
    description: "Cultivate soil and place fertilizer in one operation.",
    products: [
      {
        name: "Sugarcane Cultivator and Fertilizer Drill",
        image: fertilizerDrill,
      },
    ],
  },
  {
    slug: "disc-plough",
    name: "Disc Plough",
    description: "Turn and prepare tough soil for the next crop cycle.",
    products: [{ name: "Disc Plough", image: discPlough }],
  },
  {
    slug: "conventional-model-ratoon-manager",
    name: "Conventional Model Ratoon Manager",
    description:
      "Reliable traditional ratoon management equipment for consistent field performance.",
    products: [
      {
        name: "Conventional Model Ratoon Manager",
        image: conventionalRatoonManagerOne,
      },
      {
        name: "Conventional Model Ratoon Manager",
        image: conventionalRatoonManager,
      },
    ],
  },
  {
    slug: "ratoon-manager",
    name: "Ratoon Manager",
    description: "Support productive sugarcane ratoon crop management.",
    products: [
      { name: "Ratoon Management Device", image: ratoonOne },
      { name: "Sugarcane Ratoon Manager", image: ratoonThree },
      { name: "Sugarcane Stubble Shaver One", image: stubbleOne },
      { name: "Sugarcane Stubble Shaver Two", image: stubbleTwo },
    ],
  },
  {
    slug: "ratoon-manager-fertilizer-drill",
    name: "Ratoon Manager Fertilizer Drill",
    description: "Apply fertilizer accurately while managing ratoon crops.",
    products: [{ name: "Ratoon Manager Fertilizer Drill", image: ratoonTwo }],
  },
  {
    slug: "rigid-loaded-cultivator",
    name: "Rigid Loaded Cultivator",
    description: "Handle demanding soil preparation with rigid strength.",
    products: [
      { name: "9 Tyne Yellow Cultivator", image: rigidCultivatorYellow },
      { name: "Blue Rigid Loaded Cultivator", image: rigidCultivatorBlue },
      { name: "Rigid Loaded Cultivator", image: rigidCultivatorNew },
      { name: "Red Rigid Loaded Cultivator", image: rigidCultivatorRed },
    ],
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
];

const folderToCategorySlug = {
  "Agricultural Equipments": "agricultural-equipments",
  "Agricultural Land Leveler": "agricultural-land-leveler",
  "Earthing Up Harrow Ridger": "agricultural-ridger",
  "Agricultural Ridger": "agricultural-ridger",
  "Agricultural Sprayer Pump": "agricultural-sprayer-pump",
  "Agriculture Cultivator": "agriculture-cultivator",
  "Cultivitor And Fertilizer Drill": "cultivator-and-fertilizer-drill",
  "Disc Harrow": "disc-dollar",
  "Disc Plough": "disc-plough",
  "Napier Grass Planter": "napier-grass-planter",
  "paired Row Ridzer": "Paired Row Ridzer with fertilizer drill machine",
  "Paired Row sugarcane cutter planter": "paired-row-sugarcane-cutter-planter",
  "Pit Digging Machine": "pit-digging-machine",
  "Ratoon Manager": "ratoon-manager",
  "Ratoon Manager Fertilizer Drill": "ratoon-manager-fertilizer-drill",
  "Rigid Loaded Cultivator": "rigid-loaded-cultivator",
  "Seed Cum Fertilizer Drill": "seed-cum-fertilizer-drill",
  "Spring Loaded Cultivator": "spring-loaded-cultivator",
  "Sugarcane Cutter Planter": "agricultural-equipments",
  "Sugarcane earthing up Ridzer": "sugarcane-earthing-up-ridzer",
  "sugarcane earthing up with fertilizer drill":
    "sugarcane-earthing-up-with-fertilizer-drill",
  "Sugarcane Stubble Shaver": "ratoon-manager",
  "Sugarcane Trench Opener": "sugarcane-trench-opener",
  "Tranch Sugarcane Cutter Planter": "sugarcane-trench-cutter-planter",
  "Conventional Model Ratoon manager": "conventional-model-ratoon-manager",
};

const folderNameFromAssetPath = (assetPath) => {
  const pathParts = assetPath.split("/");
  return pathParts[pathParts.length - 2];
};

const folderDisplayNames = {
  "Agricultural Ridger": "Agricultural Ridger",
  "Agricultural Sprayer Pump": "Agricultural Sprayer Pump",
  "Agriculture Cultivator": "Agriculture Cultivator",
  "Disc Harrow": "Disc Harrow",
  "Disc Plough": "Disc Plough",
  "Pit Digging Machine": "Pit Digging Machine",
  "Ratoon Manager": "Ratoon Manager",
  "Conventional Model Ratoon manager": "Conventional Model Ratoon Manager",
  "Seed Cum Fertilizer Drill": "Seed Cum Fertilizer Drill",
  "Tranch Sugarcane Cutter Planter": "Sugarcane Trench Cutter Planter",
};

const folderNamedProductFolders = new Set([
  "Napier Grass Planter",
  "paired Row Ridzer",
  "Paired Row sugarcane cutter planter",
  "Earthing Up Harrow Ridger",
  "Sugarcane Cutter Planter",
  "Sugarcane earthing up Ridzer",
  "sugarcane earthing up with fertilizer drill",
  "Sugarcane Trench Opener",
  "Tranch Sugarcane Cutter Planter",
]);

const pitDiggingCardsMovedToRingPitDigger = new Set([
  "pit-digging-machine-01",
  "pit-digging-machine-02",
  "pit-digging-machine-04",
  "pit-digging-machine-05",
  "pit-digging-machine-06",
]);

const discHarrowCardsMovedToDiscDollar = new Set([
  "disc-harrow-01",
  "disc-harrow-02",
  "disc-harrow-03",
  "disc-harrow-04",
]);

const productNameFromAssetPath = (assetPath) => {
  const folderName = folderNameFromAssetPath(assetPath);
  const fileName = assetPath
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  const seriesMatch = fileName.match(/-(\d+)$/);

  if (folderName === "Disc Plough") {
    return "Disc Plough";
  }

  if (folderName === "Agricultural Sprayer Pump") {
    return "Agricultural Sprayer Pump";
  }

  if (folderName === "Agriculture Cultivator") {
    return "Agriculture Cultivator";
  }

  if (folderName === "Conventional Model Ratoon manager") {
    return "Conventional Model Ratoon Manager";
  }

  if (folderName === "Ratoon Manager Fertilizer Drill") {
    return "Ratoon Manager Fertilizer Drill";
  }

  if (folderName === "Seed Cum Fertilizer Drill") {
    return "Seed Cum Fertilizer Drill";
  }

  if (folderName === "Agricultural Equipments" && fileName === "first") {
    return "Sugarcane Cutter Planter";
  }

  if (seriesMatch && folderDisplayNames[folderName]) {
    return `${folderDisplayNames[folderName]} ${seriesMatch[1]}`;
  }

  if (fileName.startsWith("IMG-") && folderDisplayNames[folderName]) {
    return `${folderDisplayNames[folderName]} Additional`;
  }

  return fileName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const extraProductsByCategory = Object.entries(productAssets).reduce(
  (productsByCategory, [assetPath, image]) => {
    const folderName = folderNameFromAssetPath(assetPath);
    const fileStem = assetPath
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "");
    const categorySlug = pitDiggingCardsMovedToRingPitDigger.has(fileStem)
      ? "ring-pit-digger-machine"
      : discHarrowCardsMovedToDiscDollar.has(fileStem)
        ? "disc-dollar"
        : folderToCategorySlug[folderName];

    if (!categorySlug) {
      return productsByCategory;
    }

    if (!productsByCategory[categorySlug]) {
      productsByCategory[categorySlug] = [];
    }

    const folderProductNumber =
      productsByCategory[categorySlug].filter(
        (product) => product.folderName === folderName,
      ).length + 1;
    const productName = [
      "Paired Row sugarcane cutter planter",
      "Earthing Up Harrow Ridger",
    ].includes(folderName)
      ? folderName
      : ["agricultural-equipments", "sugarcane-trench-cutter-planter"].includes(
            categorySlug,
          ) && folderNamedProductFolders.has(folderName)
        ? folderName === "Tranch Sugarcane Cutter Planter"
          ? "Sugarcane Trench Cutter Planter"
          : "Sugarcane Cutter Planter"
        : folderNamedProductFolders.has(folderName)
          ? `${folderName} ${String(folderProductNumber).padStart(2, "0")}`
          : productNameFromAssetPath(assetPath);

    productsByCategory[categorySlug].push({
      name: productName,
      image,
      folderName,
    });
    return productsByCategory;
  },
  {},
);

const additionalCategories = [
  {
    slug: "sugarcane-trench-cutter-planter",
    name: "Sugarcane Trench Cutter Planter",
    description:
      "Reliable trench cutter planter machines for consistent sugarcane planting.",
    products: [
      {
        name: "Sugarcane Trench Cutter Planter",
        image: agriculturalEquipmentOne,
      },
    ],
  },
  {
    slug: "paired-row-sugarcane-cutter-planter",
    name: "Paired Row sugarcane cutter planter",
    description:
      "Reliable paired-row sugarcane cutter planter equipment for efficient planting.",
    products: [],
  },
  {
    slug: "disc-dollar",
    name: "Disc Dollar",
    description:
      "Dependable disc harrow equipment for efficient soil preparation.",
    products: [],
  },
  {
    slug: "ring-pit-digger-machine",
    name: "Ring Pit Digger Machine",
    description:
      "Reliable ring pit digging machines for efficient field preparation.",
    products: [],
  },
  {
    slug: "napier-grass-planter",
    name: "Napier Grass Planter",
    description: "Reliable equipment for planting Napier grass efficiently.",
    products: [],
  },
  {
    slug: "sugarcane-earthing-up-ridzer",
    name: "Sugarcane earthing up Ridzer",
    description: "Create clean earthing-up rows for healthy sugarcane growth.",
    products: [],
  },
  {
    slug: "sugarcane-earthing-up-with-fertilizer-drill",
    name: "sugarcane earthing up with fertilizer drill",
    description:
      "Earth up sugarcane rows while placing fertilizer in one operation.",
    products: [],
  },
];

categories.push(...additionalCategories);

categories.forEach((category) => {
  const existingImages = new Set(
    category.products.map((product) => product.image),
  );
  const extraProducts = (extraProductsByCategory[category.slug] || []).filter(
    (product) => {
      const isRemovedRidgerImage =
        category.slug === "agricultural-ridger" &&
        (product.name.startsWith("Photoroom") ||
          product.name.startsWith("Agricultural Ridger"));

      return (
        !existingImages.has(product.image) &&
        !excludedProductNames.has(product.name) &&
        !(
          category.slug === "agricultural-ridger" &&
          excludedEarthingUpRidgerProductNames.has(product.name)
        ) &&
        !isRemovedRidgerImage
      );
    },
  );
  category.products.push(...extraProducts);

  if (category.slug === "agricultural-ridger" && category.products.length > 1) {
    category.products.unshift(category.products.pop());
  }

  if (category.slug === "ratoon-manager") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "rigid-loaded-cultivator") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "disc-dollar") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "ring-pit-digger-machine") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "napier-grass-planter") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "sugarcane-earthing-up-ridzer") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "sugarcane-earthing-up-with-fertilizer-drill") {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (
    [
      "agriculture-cultivator",
      "cultivator-and-fertilizer-drill",
      "Paired Row Ridzer with fertilizer drill machine",
    ].includes(category.slug)
  ) {
    category.products = category.products.map((product) => ({
      ...product,
      name: category.name,
    }));
  }

  if (category.slug === "Paired Row Ridzer with fertilizer drill machine") {
    category.products = category.products.map((product, index) =>
      index >= 2 && index <= 4
        ? { ...product, name: "Paired Row Ridzer machine" }
        : product,
    );
  }

  category.products = category.products.map((product) => ({
    ...product,
    description: productDescription(product.name),
  }));
});

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildProductSlug = (product) => {
  const imageName = product.image
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");

  return `${slugify(product.name)}-${slugify(imageName)}`;
};

const ProductCard = ({ categorySlug, product }) => (
  <Link
    className="product-card category-product-card"
    to={`/products/${categorySlug}/${buildProductSlug(product)}`}
  >
    <div className="product-card-media">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-card-content">
      <div className="product-card-meta">
        <span>Farm equipment</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
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
        aria-label="Close enquiry popup"
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
    (item) => buildProductSlug(item) === productSlug,
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
      (item) => item !== selectedProduct,
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
              {selectedProduct.description} Talk to our team to find the right
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
            onClose={() => setIsEnquiryOpen(false)}
          />
        )}
        <h2 className="related-title">More in this category</h2>
        {relatedProducts.length > 0 && (
          <div className="product-cards">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.name}
                categorySlug={category.slug}
                product={product}
              />
            ))}
          </div>
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
        {(
          categoryPageDescriptions[category.slug] || [category.description]
        ).map((paragraph) => (
          <div
            className="section-desc category-product-description"
            key={paragraph}
          >
            <p>{paragraph}</p>
          </div>
        ))}
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
              <img
                src={item.coverImage || item.products[0]?.image}
                alt={item.name}
              />
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
