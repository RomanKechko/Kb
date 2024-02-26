export const url: string = process.env.NEXT_PUBLIC_URL as string;

export default async function checkResponse(res: Response) {
  if (res.status === 404) {
    throw "404";
  }

  if (res.ok) {
    return res.json();
  }

  console.error("Error in response:", res.status, res.statusText);
  const err = await res.json();
  return await Promise.reject(err);
}
