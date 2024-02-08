import { ActionFunction, json } from "@vercel/remix"
import { convertToDataBlob } from "~/lib/handlers/convert-to-hex.server"

export const action: ActionFunction = async ({ request }): Promise<Response> => {
 const formData = await request.formData()
 const foreignContent = formData.get("foreignCsvContent") as string
 const leagueContent = formData.get("leagueCsvContent") as string
 const teamContent = formData.get("teamCsvContent") as string
 const exeContent = formData.get("exeContent") as string

 const {
    data: { foreign, league, team },
    errors,
  } = convertToDataBlob(foreignContent, leagueContent, teamContent, exeContent);

 return json<ToDatActionData>({foreign, league, team, errors})
}

export interface ToDatActionData {
  foreign: string
  league: string
  team: string
  errors: string[]
}