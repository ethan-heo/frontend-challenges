import { css } from "@emotion/react";

const desktop = css`
  margin-top: 20px;
  padding: 20px;
  gap: 20px;
  grid-template-areas: "user-icon textarea send-btn";
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;

  .comment-add__user-icon > img {
    width: 48px;
    height: 48px;
  }
`;

export default desktop;
