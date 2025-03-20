import { catProducts } from './cats';
import { rabbitProducts } from './rabbit';
import { birdProducts } from './birds';
import { dogProducts } from './dogs';
import { fishProducts } from './fish';

export const allProducts = [
  ...birdProducts,
  ...catProducts,
  ...dogProducts,
  ...fishProducts,
  ...rabbitProducts
];