import { css } from "@emotion/react";

const mobile = css`
  gap: 12px;
  padding: 12px;
  grid-template-areas:
    "user user user user"
    "content content content content"
    "score _ _ utils";

  .comment-score {
    width: 100px;
  }
`;

export default mobile;
