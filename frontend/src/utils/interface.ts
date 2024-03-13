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
