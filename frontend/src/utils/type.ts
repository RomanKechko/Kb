export type Images = {
  image?: string;
  image_mobile?: string;
  image_large?: string;
  pdf?: string;
};

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
  images: Images;
};
interface RefreshTokenPayload {
  token: string | null;
}
export interface IOptions {
  method: string;
  mode?: string;
  credentials?: string;
  headers?:
    | {
        [name: string]: string;
      }
    | {
        Authorization: string | null;
        "Content-Type": "application/json;charset=utf-8";
      }
    | {
        Authorization: string | null;
      };

  body?: string | RefreshTokenPayload;
}
