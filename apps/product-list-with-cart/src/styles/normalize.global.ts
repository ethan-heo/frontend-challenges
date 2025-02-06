import { css } from "@emotion/react";

const normalize = css`
  :root {
    --color-red: hsl(14, 86%, 42%);
    --color-green: hsl(159, 69%, 38%);
    --color-rose-50: hsl(20, 50%, 98%);
    --color-rose-100: hsl(13, 31%, 94%);
    --color-rose-300: hsl(14, 25%, 72%);
    --color-rose-400: hsl(7, 20%, 60%);
    --color-rose-500: hsl(12, 20%, 44%);
    --color-rose-900: hsl(14, 65%, 9%);
    --font-size: 16px;
    --font-weight-400: 400;
    --font-weight-600: 600;
    --font-weight-700: 700;
  }

  body {
    font-family: "Red Hat Text", serif;
    font-size: var(--font-size);
    font-weight: var(--font-weight-400);
    background-color: var(--color-rose-100);
  }

  * {
    box-sizing: border-box;
  }
`;

export default normalize;
