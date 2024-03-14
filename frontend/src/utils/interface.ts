export interface IProject {
  _id: string;
  name: string;
  price: string;
  deadline: string;
  complexity: string;
  description: string;
  images: {
    video?: {};
    image_1?: {};
    image_2?: {};
    image_3?: {};
    gif?: {};
    gif_image?: {};
    pdf?: {};
    word?: {};
  };
}
export interface IdataProject {
  data: IProject[];
}
export interface IStatusSetProject {
  success: boolean;
  message: string;
}

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
