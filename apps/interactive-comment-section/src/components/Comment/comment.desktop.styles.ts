import { css } from "@emotion/react";

const desktop = css`
  gap: 16px;
  padding: 20px;
  grid-template-areas:
    "score user user utils"
    "score content content content";
  grid-template-columns: auto 1fr 1fr auto;
  grid-template-rows: auto;

  .comment-score {
    flex-direction: column;
    align-items: center;
    align-self: self-start;
    padding: 12px;
    gap: 16px;
  }
`;

export default desktop;
