import { css } from "@emotion/react";

const mobile = css`
  li + li {
    margin-top: 12px;
  }

  & > ul {
    padding-left: 12px;
    margin-top: 12px;
    border-left: 2px solid var(--color-light-gray);
  }
`;

export default mobile;
