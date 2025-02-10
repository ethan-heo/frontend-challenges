import { css } from "@emotion/react";

const common = css`
  display: grid;
  background-color: var(--color-white);

  .comment-score {
    grid-area: score;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-light-gray);
    border-radius: 8px;
    padding: 8px 12px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }

    &__count {
      color: var(--color-moderate-blue);
      font-weight: var(--font-weight-500);
    }
  }

  .comment-user {
    grid-area: user;
    display: flex;
    gap: 12px;
    align-items: center;

    &__icon > img {
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 100%;
    }
    &__me {
      background-color: var(--color-moderate-blue);
      color: var(--color-white);
      padding: 3px 4px;
      font-size: 0.8rem;
    }
    &__dates {
      color: var(--color-grayish-blue);
    }
  }

  .comment-content {
    grid-area: content;
    color: var(--color-grayish-blue);
    word-break: keep-all;

    &[data-editable="true"] {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    &__nickname {
      color: var(--color-moderate-blue);
      font-weight: var(--font-weight-700);
      margin-right: 8px;
    }

    &__textarea {
      width: 100%;
      min-height: 80px;
      border: 1px solid var(--color-light-gray);
      border-radius: 8px;
      padding: 12px 16px;
    }

    &__update-btn {
      padding: 12px 24px;
      color: var(--color-white);
      background-color: var(--color-moderate-blue);
      font-size: 1.1rem;
      width: fit-content;
      border-radius: 8px;
      margin-top: 12px;
    }
  }

  .comment-utils {
    grid-area: utils;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;

    button {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__reply {
      color: var(--color-moderate-blue);
      font-weight: var(--font-weight-700);
    }
    &__delete {
      color: var(--color-soft-red);
      font-weight: var(--font-weight-700);
    }
    &__edit {
      color: var(--color-moderate-blue);
      font-weight: var(--font-weight-700);
    }
  }
`;

export default common;
