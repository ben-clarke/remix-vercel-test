import { useEffect, useState } from "react";
import { AlertVariant } from "../components/alert";
import DataInstructions from "../components/uploaders/data/data-instructions";
import UploadComplete from "../components/uploaders/upload-complete";
import { DAT_FOREIGN, DAT_LEAGUE, DAT_TEAM, EXE_CM } from "../constants/files";
import { UPLOAD_DATA_PARSED } from "../constants/strings";
import { Message } from "../types/web";
import DataUpload from "~/components/uploaders/data-upload";
import { ToCsvActionData, action} from "~/route-handlers/to-csv/server/to-csv.action.server"
import { Fetcher, useFetcher } from "@remix-run/react";
import { createHumanReadableFiles } from "~/utils/file-create";
import FetcherSubmittingOverlay from "~/components/fetcher-submitting-overlay";
import { resetFetcher } from "~/utils/reset-fetcher";

const ConvertToCsv = (): JSX.Element => {
  const [message, setMessage] = useState<Message>({ data: [], variant: "info" });

  const [foreignContent, setForeignContent] = useState("");
  const [leagueContent, setLeagueContent] = useState("");
  const [teamContent, setTeamContent] = useState("");

  const [exeContent, setExeContent] = useState("");

  const fetcher = useFetcher<ToCsvActionData>();

  const setFileValues = (name: string, value: string, fileType: string): void => {
    if (fileType === DAT_FOREIGN) setForeignContent(value);
    if (fileType === DAT_LEAGUE) setLeagueContent(value);
    if (fileType === DAT_TEAM) setTeamContent(value);
    if (fileType === EXE_CM) setExeContent(value);
  };

  const setDataAlertMessage = (data: string[], variant: AlertVariant): void => {
    setMessage({ data, variant });
  };

  useEffect(() => {
    if (
      foreignContent.length > 0 &&
      leagueContent.length > 0 &&
      teamContent.length > 0 &&
      exeContent.length > 0
    ) {
      fetcher.submit({ foreignContent, leagueContent, teamContent, exeContent }, { method: "post"});
      setForeignContent("");
      setLeagueContent("");
      setTeamContent("");
      setExeContent("");
    }
  }, [foreignContent, leagueContent, teamContent, exeContent]);

  useEffect(() => {
    if (isFetcherDone(fetcher) && fetcher.data) { 
      const {foreign, league, team, exe} = fetcher.data
      createHumanReadableFiles(foreign, league, team, exe)
      resetFetcher(fetcher);
      setMessage({
        data: [UPLOAD_DATA_PARSED],
        variant: "success",
      });
    }
  }, [fetcher.state]);

  return (
    <>
      <FetcherSubmittingOverlay fetcher={fetcher} />
      <div className="text-center bg-dark-gray text-white flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="w-1/2 text-sm pl-8 pr-4 text-justify text-gray-400 font-medium my-8">
            <DataInstructions />
          </div>
          <div className="w-1/2 mt-8 px-8">
            {message && message.data.length === 0 ? (
              <DataUpload setFiles={setFileValues} setMessage={setDataAlertMessage} />
            ) : (
              <UploadComplete message={message} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const isFetcherDone = (fetcher: Fetcher): boolean =>
  fetcher.state === "idle" && fetcher.data != null;

export default ConvertToCsv;

export { action }