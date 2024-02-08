import type { Fetcher } from "@remix-run/react";
import { includes } from "ramda";
import { SpinnerOverlay } from "../overlay";

const FetcherSubmittingOverlay = ({
  fetcher,
  showWhenStates = ["submitting", "loading"],
  className = "",
  fullScreen = false,
  fixed = true,
}: FetcherSubmittingOverlayProps): JSX.Element | null => {
  const showOverlay = includes(fetcher.state, showWhenStates);
  return showOverlay ? (
    <SpinnerOverlay className={className} fullScreen={fullScreen} fixed={fixed} />
  ) : null;
};

interface FetcherSubmittingOverlayProps {
  fetcher: Fetcher;
  showWhenStates?: ("submitting" | "loading")[];
  className?: string;
  fullScreen?: boolean;
  fixed?: boolean;
}

export default FetcherSubmittingOverlay;
