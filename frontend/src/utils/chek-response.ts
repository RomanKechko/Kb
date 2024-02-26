export const url: string = process.env.NEXT_PUBLIC_URL as string;

export default function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  } else {
    console.error("Error in response:", res.status, res.statusText);
    return res.json().then((err: any) => Promise.reject(err));
  }
}
