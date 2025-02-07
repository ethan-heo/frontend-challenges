import { css } from "@emotion/react";

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .order-confirm-total {
    &__title {
      color: var(--color-rose-500);
    }

    &__price {
      font-size: 1.6rem;
      font-weight: var(--font-weight-600);
      color: var(--color-rose-900);
    }
  }
`;

export default styles;
