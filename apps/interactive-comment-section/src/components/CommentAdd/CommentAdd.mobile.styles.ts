import { css } from "@emotion/react";

const mobile = css`
  margin-top: 12px;
  padding: 12px;
  gap: 12px;
  grid-template-areas:
    "textarea textarea textarea textarea"
    "user-icon _ _ send-btn";

  .comment-add__user-icon > img {
    width: 36px;
    height: 36px;
  }
`;

export default mobile;
