import { css } from "@emotion/react";

const common = css`
  display: grid;
  background-color: var(--color-white);
  border-radius: 8px;
  align-items: start;

  .comment-add__textarea {
    grid-area: textarea;
    width: 100%;
    min-height: 80px;
    border: 1px solid var(--color-light-gray);
    border-radius: 8px;
    padding: 12px 16px;
  }
  .comment-add__user-icon {
    grid-area: user-icon;
    justify-self: self-start;
    display: block;
    width: fit-content;

    & > img {
      border-radius: 100%;
    }
  }
  .comment-add__send-btn {
    grid-area: send-btn;
    justify-self: self-end;
    padding: 12px 24px;
    color: var(--color-white);
    background-color: var(--color-moderate-blue);
    font-size: 1.1rem;
    width: fit-content;
    border-radius: 8px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default common;
