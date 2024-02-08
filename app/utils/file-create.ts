import pkg from 'file-saver';
import { DAT_FOREIGN, DAT_LEAGUE, DAT_TEAM } from '~/constants/files';
const { saveAs } = pkg;

export const createHumanReadableFiles = (
  foreign: string,
  league: string,
  team: string,
  exe: string,
): void => {
  // const {
  //   data: { foreign: foreignCsv, league: leagueCsv, team: teamCsv, exe: exeCsv },
  // } = convertToHumanReadableBlob(foreign, league, team, exe);

  const items = [
    { filename: "FOREIGN.DAT.csv", data: foreign },
    { filename: "LEAGUE.DAT.csv", data: league },
    { filename: "TEAM.DAT.csv", data: team },
    { filename: "CMEXE.EXE.csv", data: exe },
  ];

  items.forEach(({ filename, data }) => {
    const file = new Blob([data], { type: "application/csv" });
    saveAs(file, filename);
  });
};

export const createDataFiles = (
  foreign: string,
  league: string,
  team: string,
): string[] => {

  const items = [
    { filename: DAT_FOREIGN, data: foreign },
    { filename: DAT_LEAGUE, data: league },
    { filename: DAT_TEAM, data: team },
  ];

  items.forEach(({ filename, data }) => {
    convertAndStoreData(filename, data);
  });

  return [];
};

export const convertAndStoreData = (filename: string, data: string): void => {
  const byteArray = new Uint8Array(data.length / 2);
  for (let i = 0; i < byteArray.length; i += 1) {
    byteArray[i] = parseInt(data.substr(i * 2, 2), 16);
  }

  const blob = new Blob([byteArray], { type: "application/octet-stream" });
  saveAs(blob, filename);
};