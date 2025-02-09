import { css } from "@emotion/react";

const tablet = css`
  li + li {
    margin-top: 16px;
  }

  & > ul {
    padding-left: 16px;
    margin-top: 16px;
    border-left: 2px solid var(--color-light-gray);
  }
`;

export default tablet;
