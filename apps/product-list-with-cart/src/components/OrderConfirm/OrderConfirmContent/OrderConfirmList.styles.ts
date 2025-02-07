import { css } from "@emotion/react";

const styles = css`
  margin-bottom: 20px;
  max-height: 480px;
  overflow-y: auto;
  padding: 0 20px;

  li {
    padding-bottom: 16px;
  }

  li + li {
    padding-top: 16px;
  }
`;

export default styles;
