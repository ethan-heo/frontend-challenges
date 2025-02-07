import { css } from "@emotion/react";

const common = css`
  background-color: var(--color-rose-50);
  padding: 32px 20px;

  .order-confirm-content {
    &__icon {
      margin-bottom: 32px;
    }

    &__title {
      font-size: 2rem;
      font-weight: var(--font-weight-700);
      margin-bottom: 16px;
    }

    &__desc {
      color: var(--color-rose-400);
      margin-bottom: 28px;
    }

    &__product {
      padding: 20px;
      border-radius: 8px;
      background-color: var(--color-rose-100);
      margin-bottom: 28px;
    }
  }
`;

export default common;
