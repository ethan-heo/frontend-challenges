import { css } from "@emotion/react";

const common = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000090;

  .delete-modal__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--color-white);
    padding: 24px;
    border-radius: 8px;

    &__title {
      color: var(--color-dark-blue);
      font-size: 1.2rem;
      font-weight: var(--font-weight-700);
    }

    &__desc {
      color: var(--color-grayish-blue);
      word-break: keep-all;
    }

    &__activate {
      display: flex;
      gap: 12px;

      &__cancel-btn,
      &__delete-btn {
        flex: 1 1 auto;
        padding: 16px;
        border-radius: 8px;
        color: var(--color-white);
        font-size: 1.2rem;
        font-weight: var(--font-weight-700);
      }

      &__cancel-btn {
        background-color: var(--color-grayish-blue);
      }

      &__delete-btn {
        background-color: var(--color-soft-red);
      }
    }
  }
`;

export default common;
