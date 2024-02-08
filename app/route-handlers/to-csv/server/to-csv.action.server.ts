import { ActionFunction, json } from "@vercel/remix"
import { convertToHumanReadableBlob } from "~/lib/handlers/convert-to-human-readable.server"

export const action: ActionFunction = async ({ request }): Promise<Response> => {
 const formData = await request.formData()
 const foreignContent = formData.get("foreignContent") as string
 const leagueContent = formData.get("leagueContent") as string
 const teamContent = formData.get("teamContent") as string
 const exeContent = formData.get("exeContent") as string

 const {
    data: { foreign, league, team, exe },
  } = convertToHumanReadableBlob(foreignContent, leagueContent, teamContent, exeContent);

 return json<ToCsvActionData>({foreign, league, team, exe})
}

export interface ToCsvActionData {
  foreign: string
  league: string
  team: string
  exe: string
}