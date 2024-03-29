import type { IconProps } from "./types";

const LockOpen = ({ className, testId = "lock-open" }: IconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-testid={testId}
    viewBox="0 0 48 48"
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M11 44q-1.25 0-2.125-.875T8 41V19.3q0-1.25.875-2.125T11 16.3h19.5v-4.8q0-2.7-1.9-4.6Q26.7 5 24 5q-2.35 0-4.1 1.4-1.75 1.4-2.25 3.6-.15.65-.6 1.075-.45.425-1.05.425-.65 0-1.075-.45Q14.5 10.6 14.6 10q.55-3.45 3.175-5.725Q20.4 2 24 2q3.95 0 6.725 2.775Q33.5 7.55 33.5 11.5v4.8H37q1.25 0 2.125.875T40 19.3V41q0 1.25-.875 2.125T37 44Zm0-3h26V19.3H11V41Zm13-7q1.6 0 2.725-1.1t1.125-2.65q0-1.5-1.125-2.725T24 26.3q-1.6 0-2.725 1.225T20.15 30.25q0 1.55 1.125 2.65Q22.4 34 24 34ZM11 19.3V41 19.3Z"
    />
  </svg>
);

export default LockOpen;
