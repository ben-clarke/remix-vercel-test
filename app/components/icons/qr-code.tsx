import type { IconProps } from "./types";

const QRCode = ({ className, testId = "qr-code" }: IconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-testid={testId}
    viewBox="0 -960 960 960"
  >
    <path d="M120-510v-330h330v330H120Zm60-60h210v-210H180v210Zm-60 450v-330h330v330H120Zm60-60h210v-210H180v210Zm330-330v-330h330v330H510Zm60-60h210v-210H570v210Zm188 450v-82h82v82h-82ZM510-367v-83h82v83h-82Zm82 82v-82h83v82h-83Zm-82 83v-83h82v83h-82Zm82 82v-82h83v82h-83Zm83-82v-83h83v83h-83Zm0-165v-83h83v83h-83Zm83 82v-82h82v82h-82Z" />
  </svg>
);

export default QRCode;
