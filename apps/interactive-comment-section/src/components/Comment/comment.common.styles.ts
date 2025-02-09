import { css } from "@emotion/react";

const common = css`
  display: grid;

  .comment-score {
    grid-area: score;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background-color: var(--color-light-gray);
    border-radius: 8px;
    padding: 8px 12px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
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

    &__icon {
      display: block;
      width: 24px;
      height: 24px;
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

    &__nickname {
      color: var(--color-moderate-blue);
      font-weight: var(--font-weight-700);
      margin-right: 8px;
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
