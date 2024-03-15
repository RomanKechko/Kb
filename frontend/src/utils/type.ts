export type Images = {
  image?: string;
  image_mobile?: string;
  image_large?: string;
  pdf?: string;
  video?: string;
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

export type TProjectData = {
  name: string;
  price: string;
  deadline: string;
  complexity: string;
  description: string;
  images: Timages;
};

export type Timages = {
  image_1?: File;
  image_2?: File;
  image_3?: File;
  video?: File;
  pdf?: File;
  gif?: File;
  'gif-image'?: File
  word?: File;
};
