import { LoaderFunction, redirect } from "@vercel/remix"

export const loader: LoaderFunction = async (): Promise<Response> => {
  return redirect("/to-csv")
 }