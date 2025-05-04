import CatFishTreats from '../assets/prodcuts/cats/CatFishTreats.jpg'
import RabbitTreats from '../assets/prodcuts/cats/rabbit-treat-for-cats.jpg'
import TreatsCats from '../assets/prodcuts/cats/treats-for-cats.jpg'
import SalmonTreat from '../assets/prodcuts/cats/SalmonTreat.jpg'
import HairBrush from '../assets/prodcuts/cats/BrushRemove.jpg'
import PlayPen from '../assets/prodcuts/cats/KittenPlayPen.jpg'

export const catProducts = [
  {
    id: 1,
    category: "Cats",
    french: "Friandises au poisson pour chat",
    name: "Cat Fish Treats",
    cutPrice: "2.90€",
    price: "2.30€",
    slug: "catfish-treats",
    description: "Tasty cat treats with 3 fish-flavored sticks — perfect for rewarding your furry friend.",
    frenchDesc: "Friandises savoureuses pour chats avec 3 bâtonnets au goût de poisson — parfaites pour récompenser votre ami à quatre pattes.",
    image: CatFishTreats,
    variants: [
      { weight: "1 piece", price: "2.30€" },
      { weight: "10 pieces", price: "19.00€" }
    ]
  },

  {
    id: 2,
    category: "Cats",
    french: "Friandises pour lapins",
    name: "Rabbit Treats",
    cutPrice: "2.90€",
    price: "2.30€",
    slug: "rabbit-treats",
    description: "Tasty cat treats with 3 rabbit-flavored sticks — perfect for rewarding your furry friend.",
    image: RabbitTreats,
    variants: [
      { weight: "1 piece", price: "2.30€" },
      { weight: "10 pieces", price: "19.00€" }
    ]
  },

  {
    id: 3,
    category: "Cats",
    french: "Friandises à la dinde",
    name: "Turkey Treats",
    cutPrice: "2.90€",
    price: "2.30€",
    slug: "turkey-treats",
    description: "Tasty cat treats with 3 turkey-flavored sticks — perfect for rewarding your furry friend.",
    image: TreatsCats,
    variants: [
      { weight: "1 piece", price: "2.30€" },
      { weight: "10 pieces", price: "19.00€" }
    ]
  },

  {
    id: 4,
    category: "Cats",
    french: "Friandise Saumon Pour Chats",
    name: "Salmon Treat for Cats",
    cutPrice: "2.90€",
    price: "2.30€",
    slug: "salmon-treat-for-cats",
    description: "Tasty cat treats with 3 salmon-flavored sticks — perfect for rewarding your furry friend.",
    image: SalmonTreat,
    variants: [
      { weight: "1 piece", price: "2.30€" },
      { weight: "10 pieces", price: "19.00€" }
    ]
  },

  {
    id: 5,
    category: "Cats",
    french: "Brosse Pour Enlever Poils",
    name: "Hair Removal Brush",
    cutPrice: "11.0€",
    price: "9.90€",
    slug: "hair-removal-brush",
    description: "High-quality cat food made with real meat and essential nutrients for optimal health.",
    image: HairBrush
  },

  {
    id: 6,
    category: "Cats",
    french: "Parc Pour Chatons",
    name: "Kitten Playpen",
    cutPrice: "71.25€",
    price: "69.90€",
    slug: "kitten-playpen",
    description: "High-quality cat food made with real meat and essential nutrients for optimal health.",
    image: PlayPen
  },
  
]; 