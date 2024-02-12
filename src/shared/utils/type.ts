export type Ingredient = {
  _id: string;
  name: string;
  type: string;
  calories: number;
  carbohydrates: number;
  proteins: number;
  fat: number;
  price: number;
  __v: number;
  images: Record<string, string>;
};
