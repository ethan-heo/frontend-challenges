import { css } from "@emotion/react";

const tablet = css`
  margin-top: 16px;
  padding: 16px;
  gap: 16px;
  grid-template-areas:
    "textarea textarea textarea textarea"
    "user-icon _ _ send-btn";

  .comment-add__user-icon > img {
    width: 36px;
    height: 36px;
  }
`;

export default tablet;
