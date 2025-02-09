import { css } from "@emotion/react";

const normalize = css`
  :root {
    --color-moderate-blue: hsl(238, 40%, 52%);
    --color-soft-red: hsl(358, 79%, 66%);
    --color-light-grayish-blue: hsl(239, 57%, 85%);
    --color-pale-red: hsl(357, 100%, 86%);
    --color-dark-blue: hsl(212, 24%, 26%);
    --color-grayish-blue: hsl(211, 10%, 45%);
    --color-light-gray: hsl(223, 19%, 93%);
    --color-very-light-gray: hsl(228, 33%, 97%);
    --color-white: hsl(0, 0%, 100%);
    --font-size: 16px;
    --font-weight-400: 400;
    --font-weight-500: 500;
    --font-weight-700: 700;
  }

  body {
    font-family: "Rubik", serif;
    font-size: var(--font-size);
    font-weight: var(--font-weight-400);
    background-color: var(--color-very-light-gray);
  }

  * {
    box-sizing: border-box;
  }
`;

export default normalize;
