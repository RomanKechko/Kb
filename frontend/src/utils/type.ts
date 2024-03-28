import { categoriesType } from '@/components/mainRight/dropdown/dropdown'

export type TProjectData = {
  name: string
  price: string
  deadline: string
  complexity: string
  description: string
  category: categoriesType
  images: TFormImages
}

export type TFormImages = {
  image_1?: File
  image_2?: File
  image_3?: File
  video?: File
  pdf?: File
  gif?: File
  'gif-image'?: File
}

export type TImages = 'video' | 'image_1' | 'image_2' | 'image_3' | 'gif' | 'gif_image' | 'pdf';

export type TDataImage = {
  [name in TImages]?: string
}