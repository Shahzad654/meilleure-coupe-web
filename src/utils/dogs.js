import BeefTreat from '../assets/prodcuts/dogs/BeefDogTreats.jpg';
import BeefTreat2 from '../assets/prodcuts/dogs/Beef-Treat.jpg'
import ChickenTreat from '../assets/prodcuts/dogs/ChickenTreats.jpg';
import ChickenTreat2 from '../assets/prodcuts/dogs/ChickenFlavorTreat.jpg';
import DogToy from '../assets/prodcuts/dogs/dogropetoy.jpg';
import DogToy2 from '../assets/prodcuts/dogs/dog-rope-toys.jpg';
import ChickenSlice from '../assets/prodcuts/dogs/Chicken-Slice.jpg'
import ToneHair from '../assets/prodcuts/dogs/tone-dog-hairs.jpg'
import TreatTrips from '../assets/prodcuts/dogs/Treat-Trips.jpg'
import HairRemover from '../assets/prodcuts/dogs/dog-haris-remover.jpg'
import HairBrush from '../assets/prodcuts/cats/BrushRemove.jpg'
import DogLeash from '../assets/prodcuts/dogs/DogLeash.jpg'


export const dogProducts = [
  {
    id: 1,
    category: "Dogs",
    french: "Friandises au bœuf pour chiens",
    name: "Dog Beef Treats",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "dogs-beef-treats",
    description: "High-quality dog food made with real meat and essential nutrients for optimal health.",
    image: BeefTreat,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },
  {
    id: 2,
    category: "Dogs",
    french: "Friandises au poulet",
    name: "Chicken Treats",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "dogs-chicken-treats",
    description: "Delicious chicken-flavored treats that your dog will love.",
    image: ChickenTreat,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },
  {
    id: 3,
    category: "Dogs",
    french: "Friandises au goût de poulet",
    name: "Chicken Flavor Treats",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "dogs-chicken-flavor-treats",
    description: "Premium chicken-flavored treats for your furry friend.",
    image: ChickenTreat2,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },
  {
    id: 4,
    category: "Dogs",
    french: "Jouet de corde pour chien",
    name: "Dog Rope Toy",
    cutPrice: "10.90€",
    price: "9.90€",
    slug: "dogs-rope-toy",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: DogToy
  },
  {
    id: 5,
    category: "Dogs",
    french: "Friandises au bœuf",
    name: "Beef Treats",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "beef-treats",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: BeefTreat2,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },
  {
    id: 6,
    category: "Dogs",
    french: "Jouet de corde",
    name: "Rope Toy",
    cutPrice: "30.50€",
    price: "29.90€",
    slug: "rope-toy",
    description: "4 Pieces durable rope toy perfect for interactive play with your dog.",
    image: DogToy2
  },
  {
    id: 7,
    category: "Dogs",
    french: "Tranche de poulet",
    name: "Chicken Slice",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "chicken-slice",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: ChickenSlice,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },
  {
    id: 8,
    category: "Dogs",
    french: "Tonifier les poils de chien",
    name: "Tone Dog Hairs",
    cutPrice: "20.50€",
    price: "19.90€",
    slug: "tone-dog-hairs",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: ToneHair
  },
  {
    id: 9,
    category: "Dogs",
    french: "Traiter les voyages",
    name: "Treat Trips",
    cutPrice: "2.90€",
    price: "2.10€",
    slug: "treat-trips",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: TreatTrips,
    variants: [
      { weight: "1 piece", price: "2.10€" },
      { weight: "10 pieces", price: "18.50€" }
    ]
  },

  {
    id: 10,
    category: "Dogs",
    french: "Gant Brossage Poil Chien",
    name: "Dog Hair Brushing Glove",
    cutPrice: "11.90€",
    price: "10.50€",
    slug: "treat-trips",
    description: "Durable rope toy perfect for interactive play with your dog.",
    image: HairRemover
  },

  {
    id: 11,
    category: "Dogs",
    french: "Brosse Pour Enlever Poils",
    name: "Hair Removal Brush",
    cutPrice: "10.50€",
    price: "9.90€",
    slug: "hair-removal-brush",
    description: "High-quality cat food made with real meat and essential nutrients for optimal health.",
    image: HairBrush
  },

  {
    id: 12,
    category: "Dogs",
    french: "Laisse Réfléchissant Pour Chiens",
    name: "Reflective Dog Leash",
    cutPrice: "12.30€",
    price: "10.50€",
    slug: "reflective-dog-leash",
    description: "High-quality cat food made with real meat and essential nutrients for optimal health.",
    image: DogLeash,
    variants: [
      { weight: "1 piece", price: "10.50€" },
      { weight: "3 pieces", price: "24.90€" }
    ]
  },

]; 