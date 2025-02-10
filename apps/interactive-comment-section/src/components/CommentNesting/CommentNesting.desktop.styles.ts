import { css } from "@emotion/react";

const desktop = css`
  li + li {
    margin-top: 20px;
  }

  & > li > ul {
    padding-left: 20px;
    margin-top: 20px;
    border-left: 2px solid var(--color-light-gray);
  }
`;

export default desktop;
