export type Images = {
  image?: string;
  image_mobile?: string;
  image_large?: string;
  pdf?: string;
  video?: string;
};

export type TProjectData = {
  name: string;
  price: string;
  deadline: string;
  complexity: string;
  description: string;
  images: TImages;
  [key: string]: string | TImages;
};

export type TImages = {
  image_1?: File;
  image_2?: File;
  image_3?: File;
  video?: File;
  pdf?: File;
  gif?: File;
  'gif-image'?: File;
};
