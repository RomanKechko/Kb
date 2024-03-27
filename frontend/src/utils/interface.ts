export interface IData {
  id: number
  _id: string
  name: string
  price: string
  deadline: string
  complexity: string
  description: string
  order: number
  images: IDataImage
}

export interface IDataImage {
  video?: ''
  image_1?: ''
  image_2?: ''
  image_3?: ''
  gif?: ''
  gif_image?: ''
  pdf?: ''
}
export interface IStatusSetProject {
  success: boolean
  message: string
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

export interface IColletedPropsDrag {
  isDragging: boolean
}

export interface IColletedPropsDrop {
  handlerId: string
}
export interface IDragItemProject {
  project: IData
  index: number
}
