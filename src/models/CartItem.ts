import {Product} from "models/Product";

export type CartItem = {
  id: any,
  userId: string,
  title: string,
  productId: number,
  description: string,
  price: number,
  count: number,
};