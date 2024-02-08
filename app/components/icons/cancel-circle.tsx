import type { IconProps } from "./types";

const CancelCircle = ({ className, testId = "cancel-circle" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid={testId}
    className={className}
  >
    <path
      d="M12.1453 28.3333L19.0007 21.478L25.856 28.3333L28.334 25.8553L21.4787 19L28.334 12.1447L25.856 9.66666L19.0007 16.522L12.1453 9.66666L9.66732 12.1447L16.5227 19L9.66732 25.8553L12.1453 28.3333ZM19.0007 37.6667C16.4402 37.6667 14.026 37.1806 11.758 36.2083C9.48998 35.2361 7.5051 33.8991 5.80332 32.1973C4.10154 30.4956 2.76454 28.5107 1.79232 26.2427C0.820096 23.9747 0.333984 21.5604 0.333984 19C0.333984 16.4069 0.820096 13.9841 1.79232 11.7317C2.76454 9.48077 4.10154 7.50444 5.80332 5.80266C7.5051 4.10088 9.48998 2.76388 11.758 1.79166C14.026 0.819439 16.4402 0.333328 19.0007 0.333328C21.5938 0.333328 24.0165 0.819439 26.269 1.79166C28.5199 2.76388 30.4962 4.10088 32.198 5.80266C33.8998 7.50444 35.2368 9.48077 36.209 11.7317C37.1812 13.9841 37.6673 16.4069 37.6673 19C37.6673 21.5604 37.1812 23.9747 36.209 26.2427C35.2368 28.5107 33.8998 30.4956 32.198 32.1973C30.4962 33.8991 28.5199 35.2361 26.269 36.2083C24.0165 37.1806 21.5938 37.6667 19.0007 37.6667Z"
      fill="#F86363"
    />
  </svg>
);

export default CancelCircle;
