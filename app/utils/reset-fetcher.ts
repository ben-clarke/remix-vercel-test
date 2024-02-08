import type { useFetcher } from "@remix-run/react";

export const resetFetcher = (fetcher: ReturnType<typeof useFetcher>): void => {
  fetcher.submit({}, { action: "/reset-fetcher", method: "post" });
};
