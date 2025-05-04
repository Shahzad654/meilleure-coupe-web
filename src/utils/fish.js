import Oxygen from '../assets/prodcuts/fish/Aquarium-oxygen-bubbler.jpg'
import Plants from '../assets/prodcuts/fish/decorative-plants.jpg'
import Pellets from '../assets/prodcuts/fish/Fighter-Pellets.jpg'
import Aquarium from '../assets/prodcuts/fish/Plastic-Aquarium.jpg'
import Cleaning from '../assets/prodcuts/fish/Aquarium Hose Cleaning.jpg'
import AquariumPlants from '../assets/prodcuts/fish/AquariumPlants.jpg'
import Bush from '../assets/prodcuts/fish/Bush.jpg'
import FishPellets from '../assets/prodcuts/fish/FishPellets.jpg'
import Plantforfighter from '../assets/prodcuts/fish/PlantForFighter.jpg'
import Snowflake from '../assets/prodcuts/fish/Snowflake.jpg'
import Sponge from '../assets/prodcuts/fish/Sponge.jpg'
import Moly from '../assets/prodcuts/fish/Moly.jpg'
import CatchingNet from '../assets/prodcuts/fish/CatchingNet.jpg'

export const fishProducts = [
  {
    id: 1,
    category: "Fish",
    french: "Boulleur oxygene aquarium",
    name: "Aquarium Oxygen Bubbler",
    cutPrice: "16.40€",
    price: "14.90€",
    slug: "aquarium-oxygen-bubbler",
    description: "High-quality fish food with balanced nutrients for all types of aquarium fish.",
    image: Oxygen
  },
  {
    id: 2,
    category: "Fish",
    french: "Plants deco multi couleur",
    name: "Decorative Plants",
    cutPrice: "5.80€",
    price: "4.90€",
    slug: "decorative-plants",
    description: "6 pieces complete aquarium setup including tank, filter, heater, and decorations.",
    image: Plants
  },
  {
    id: 3,
    category: "Fish",
    french: "Granules Combattant",
    name: "Fighter Pellets",
    cutPrice: "5.50€",
    price: "4.50€",
    slug: "fighter-pellets",
    description: "50 gram set of artificial plants, rocks, and ornaments to create a natural underwater environment.",
    image: Pellets,
    variants: [
      { weight: "1 box", price: "4.50€" },
      { weight: "5 boxes", price: "19.90€" }
    ]
  },
  {
    id: 4,
    category: "Fish",
    french: "Aquarium Plastique",
    name: "Plastic Aquraium",
    cutPrice: "10.80€",
    price: "9.90€",
    slug: "plastic-aquraium",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Aquarium,
    variants: [
      { weight: "6 lit sm", price: "9.90€" },
      { weight: "8 lit md", price: "14.90€" },
      { weight: "10 lit lg", price: "18.90€" },
    ]
  },

  {
    id: 5,
    category: "Fish",
    french: "Nettoyage des tuyaux d'aquarium",
    name: "Aquarium Hose Cleaning",
    cutPrice: "5.00€",
    price: "3.00€",
    slug: "plastic-aquraium",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Cleaning
  },

  {
    id: 6,
    category: "Fish",
    french: "Granulés Poisson Japonais",
    name: "Japanese Fish Pellets",
    cutPrice: "5.20€",
    price: "3.90€",
    slug: "japanese-fish-pellets",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: FishPellets,
    variants: [
      { weight: "1 box", price: "3.90€" },
      { weight: "5 boxes", price: "14.90€" }
    ]
  },

  {
    id: 7,
    category: "Fish",
    french: "Plantes Mix Aquarium",
    name: "Mix Aquarium Plants",
    cutPrice: "13.50€",
    price: "12.90€",
    slug: "mix-aquarium-plants",
    description: "5 pieces comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: AquariumPlants
  },

  {
    id: 8,
    category: "Fish",
    french: "Plante Pour Combattant",
    name: "Plant For Fighter",
    cutPrice: "5.10€",
    price: "3.00€",
    slug: "plant-for-fighter",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Plantforfighter
  },

  {
    id: 9,
    category: "Fish",
    french: "Eponge Nettoyante Vitre Aquarium",
    name: "Aquarium Glass Cleaning Sponge",
    cutPrice: "9.10€",
    price: "7.90€",
    slug: "aquarium-glass-cleaning-sponge",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Sponge
  },


  {
    id: 10,
    category: "Fish",
    french: "Buisson Multicouleur Lot",
    name: "Multicolored Bush Lot",
    cutPrice: "10.20€",
    price: "8.90€",
    slug: "multicolored-bush-lot",
    description: "6 pieces comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Bush
  },

  {
    id: 11,
    category: "Fish",
    french: "Flocon Guppy",
    name: "Guppy Snowflake",
    cutPrice: "5.40€",
    price: "4.90€",
    slug: "guppy-snowflake",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Snowflake,
    variants: [
      { weight: "1 box", price: "4.90€" },
      { weight: "5 boxes", price: "19.90€" }
    ]
  },

  {
    id: 12,
    category: "Fish",
    french: "Granule Pour Scalaire Moly",
    name: "Moly Scalar Pellets",
    cutPrice: "5.30€",
    price: "4.90€",
    slug: "moly-scalar-pellets",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: Moly,
    variants: [
      { weight: "1 box", price: "4.90€" },
      { weight: "5 boxes", price: "19.90€" }
    ]
  },

  {
    id: 12,
    category: "Fish",
    french: "Epuisette Poisson",
    name: "Fish Catching Net",
    cutPrice: "4.10€",
    price: "3.00€",
    slug: "fish-catching-net",
    description: "Comprehensive kit to test pH, ammonia, nitrite, and nitrate levels in your aquarium.",
    image: CatchingNet,
    variants: [
      { weight: "x-sm", price: "3.00€" },
      { weight: "sm", price: "5.00€" },
      { weight: "md", price: "7.00€" },
      { weight: "lg", price: "9.00€" },
    ]
  },
]; 