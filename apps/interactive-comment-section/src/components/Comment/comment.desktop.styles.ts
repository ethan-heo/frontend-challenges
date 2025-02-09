import { css } from "@emotion/react";

const desktop = css`
  gap: 16px;
  padding: 20px;
  grid-template-areas:
    "score user user utils"
    "score content content content"
    "score content content content"
    "_ content content content";

  .comment-score {
    flex-direction: column;
    align-items: center;
    padding: 12px;
    gap: 16px;
  }
`;

export default desktop;
