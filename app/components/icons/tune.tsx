import type { IconProps } from "./types";

const Tune = ({ className, testId = "tune" }: IconProps): JSX.Element => (
  <svg
    className={className}
    data-testid={testId}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.58333 11.8332V7.6665H6.83333V9.12484H11.8333V10.3748H6.83333V11.8332H5.58333ZM0.166667 10.3748V9.12484H4.33333V10.3748H0.166667ZM2.66667 8.08317V6.62484H0.166667V5.37484H2.66667V3.9165H3.91667V8.08317H2.66667ZM5.16667 6.62484V5.37484H11.8333V6.62484H5.16667ZM7.66667 4.33317V0.166504H8.91667V1.62484H11.8333V2.87484H8.91667V4.33317H7.66667ZM0.166667 2.87484V1.62484H6.83333V2.87484H0.166667Z" />
  </svg>
);

export default Tune;
