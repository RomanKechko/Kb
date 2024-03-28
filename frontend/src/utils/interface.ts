import { categoriesType } from '@/components/mainRight/dropdown/dropdown'
import { TDataImage, TImages } from '@/utils/type'

export interface IData {
  id: number
  _id: string
  name: string
  price: string
  deadline: string
  complexity: string
  description: string
  category: categoriesType
  order: number
  images: TDataImage
}

interface RefreshTokenPayload {
  token: string | null
}

export interface IOptions {
  method: string
  mode?: string
  credentials?: string
  headers?:
    | {
    [name: string]: string
  }
    | {
    Authorization: string | null
    'Content-Type': 'application/json;charset=utf-8'
  }
    | {
    Authorization: string | null
  }

  body?: string | RefreshTokenPayload
}

export interface ICollectedPropsDrag {
  isDragging: boolean
}

export interface IDragItemProject {
  project: IData
  index: number
}

export interface ParamTypesModal {
  project: string
  modalId: TImages
}

export interface ParamTypes {
  project: string
}
