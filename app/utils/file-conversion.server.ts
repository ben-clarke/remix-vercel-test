import { convertToExeBlob } from "../lib/handlers/convert-to-hex.server";
import { convertAndStoreData } from "./file-create";

export const createExeFile = (exe: string, exeCsv: string): string[] => {
  const { data, errors } = convertToExeBlob(exe, exeCsv);
  if (errors.length > 0) return errors;

  convertAndStoreData("CMEXE.EXE.NEW", data);
  return [];
};


