import { useEffect, useState } from "react";
import CsvExeUpload from "../components/uploaders/csv-exe-upload";
import CsvInstructions from "../components/uploaders/csv/csv-instructions";
import { AlertVariant } from "../components/alert";
import CsvUpload from "../components/uploaders/csv-upload";
import UploadComplete from "../components/uploaders/upload-complete";
import { CSV_FOREIGN, CSV_LEAGUE, CSV_TEAM, EXE_CM } from "../constants/files";
import { UPLOAD_EDIT_PARSED } from "../constants/strings";
import { Message } from "../types/web";
import { useFetcher } from "@remix-run/react";
import { ToDatActionData, action } from "~/route-handlers/to-dat/server/to-dat.action.server";
import FetcherSubmittingOverlay from "~/components/fetcher-submitting-overlay";
import { isFetcherDone } from "./to-csv";
import { resetFetcher } from "~/utils/reset-fetcher";
import { createDataFiles } from "~/utils/file-create";

const ConvertToData = (): JSX.Element => {
  const [message, setMessage] = useState<Message>({ data: [], variant: "info" });
  const [exeMessage, setExeMessage] = useState<Message>({ data: [], variant: "info" });

  const [foreignCsvContent, setForeignCsvContent] = useState("");
  const [leagueCsvContent, setLeagueCsvContent] = useState("");
  const [teamCsvContent, setTeamCsvContent] = useState("");

  const [exeCsvContent, setExeCsvContent] = useState("");
  const [exeContent, setExeContent] = useState("");

  const fetcher = useFetcher<ToDatActionData>();

  const setFileValues = (name: string, value: string, fileType: string): void => {
    if (fileType === CSV_FOREIGN) setForeignCsvContent(value);
    if (fileType === CSV_LEAGUE) setLeagueCsvContent(value);
    if (fileType === CSV_TEAM) setTeamCsvContent(value);
    if (fileType === EXE_CM) setExeContent(value);
    if (fileType === "CMEXE.EXE.CSV") setExeCsvContent(value);
  };

  const setCsvAlertMessage = (data: string[], variant: AlertVariant): void => {
    setMessage({ data, variant });
  };

  const setCsvExeAlertMessage = (data: string[], variant: AlertVariant): void => {
    setExeMessage({ data, variant });
  };

  useEffect(() => {
    if (
      foreignCsvContent.length > 0 &&
      leagueCsvContent.length > 0 &&
      teamCsvContent.length > 0 &&
      exeContent.length > 0
    ) {
      fetcher.submit({ foreignCsvContent, leagueCsvContent, teamCsvContent, exeContent }, { method: "post"});
      setForeignCsvContent("");
      setLeagueCsvContent("");
      setTeamCsvContent("");
      setExeContent("");
    }
  }, [foreignCsvContent, leagueCsvContent, teamCsvContent, exeContent, exeCsvContent]);


  useEffect(() => {
    if (isFetcherDone(fetcher) && fetcher.data) { 
      const {foreign, league, team, errors} = fetcher.data

      if (errors.length) {
        setMessage({ data: errors, variant: "error" });
      }
      else {
        createDataFiles(foreign, league, team)
        setMessage({ data: [UPLOAD_EDIT_PARSED], variant: "success" });
      }

      resetFetcher(fetcher);
    }
  }, [fetcher.state]);

  const toggle = false;

  return (
    <>
      <FetcherSubmittingOverlay fetcher={fetcher} />
      <div className="text-center bg-dark-gray text-white flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="w-1/2 mt-8 px-8">
            <div className="mb-4">
              {message && message.data.length === 0 ? (
                <CsvUpload setFiles={setFileValues} setMessage={setCsvAlertMessage} />
              ) : (
                <UploadComplete message={message} />
              )}
            </div>
            {toggle && (
              <div>
                {exeMessage && exeMessage.data.length === 0 ? (
                  <CsvExeUpload setFiles={setFileValues} setMessage={setCsvExeAlertMessage} />
                ) : (
                  <UploadComplete message={exeMessage} />
                )}
              </div>
            )}
          </div>
          <div className="w-1/2 text-sm pl-4 pr-8 text-justify text-gray-400 font-medium my-8">
            <CsvInstructions />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertToData;

export { action }