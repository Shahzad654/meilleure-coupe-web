import RabbitMix from '../assets/prodcuts/rabbits/RabbitMix.jpg';
import GuineaPigMix from '../assets/prodcuts/rabbits/GuineaPigMix.jpg';
import CageHamsterComplete from '../assets/prodcuts/rabbits/Cage-Hamster-Complete.jpg';
import GuineaCage from '../assets/prodcuts/rabbits/Complete-Guinea-Pig-Cage.jpg';
import RabbitCage from '../assets/prodcuts/rabbits/Complete-rabbit-cage.jpg';
import SingleRabbitCage from '../assets/prodcuts/rabbits/Single-Rabbit-Cage-90cm.jpg';
import RodentTransportBox from '../assets/prodcuts/rabbits/Rodent-Transport-Box.jpg';
import CageHamster from '../assets/prodcuts/rabbits/Hamster-Cage.jpg';


export const rabbitProducts = [
  {
    id: 1,
    category: "Rabbits",
    french: "Mélange de lapin",
    name: "Rabbit Mix",
    cutPrice: "5.40€",
    price: "4.50€",
    slug: "rabbit-mix",
    description: "High-quality rabbit food with essential nutrients and fiber for optimal health.",
    image: RabbitMix,
    variants: [
      { weight: "1kg", price: "4.50€" },
      { weight: "4kg", price: "14.90€" }
    ]
  },
  {
    id: 2,
    category: "Rabbits",
    french: "Mélange de cochon d'Inde",
    name: "Guinea Pig Mix",
    cutPrice: "4.40€",
    price: "3.90€",
    slug: "rabbit-guinea-pig-mix",
    description: "High-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: GuineaPigMix,
    variants: [
      { weight: "1kg", price: "3.90€" },
      { weight: "5kg", price: "10.90€" }
    ]
  },

  {
    id: 3,
    category: "Rabbits",
    french: "Cage complète pour hamsters",
    name: "Complete Hamster Cage",
    cutPrice: "21.55€",
    price: "19.90€",
    slug: "complete-hamster-cage",
    description: "35 cm high-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: CageHamsterComplete,
    
  },

  {
    id: 4,
    category: "Rabbits",
    french: "Cage complète pour cochon d'Inde",
    name: "Complete Guinea Pig Cage",
    cutPrice: "81.00€",
    price: "79.00€",
    slug: "complete-guinea-pig-cage",
    description: "60cm high-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: GuineaCage,
  },

  {
    id: 5,
    category: "Rabbits",
    french: "Cage à Lapin Complète",
    name: "Complete Rabbit Cage",
    cutPrice: "102.00€",
    price: "99.0€",
    slug: "complete-rabbit-cage",
    description: "90 cm high-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: RabbitCage
  },

  {
    id: 6,
    category: "Rabbits",
    french: "Cage à lapin simple 90 cm",
    name: "Single Rabbit Cage 90cm",
    cutPrice: "58.00€",
    price: "55.00€",
    slug: "single-rabbit-cage-90cm",
    description: "90cm high-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: SingleRabbitCage
  },

  {
    id: 7,
    category: "Rabbits",
    french: "Boîte de transport pour rongeurs",
    name: "Rodent Transport Box",
    cutPrice: "20.00€",
    price: "18.90€",
    slug: "rodent-transport-box",
    description: "High-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: RodentTransportBox
  },

  {
    id: 8,
    category: "Rabbits",
    french: "Cage à hamsters",
    name: "Hamster Cage",
    cutPrice: "42.00€",
    price: "39.0€",
    slug: "hamster-cage",
    description: "45 cm high-quality guinea pig food with essential nutrients and fiber for optimal health.",
    image: CageHamster
  },
]; 