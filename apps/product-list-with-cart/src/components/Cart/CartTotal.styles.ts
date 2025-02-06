import { css } from "@emotion/react";

const styles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cart-total {
    color: var(--color-rose-900);

    &__price {
      font-size: 1.6rem;
      font-weight: var(--font-weight-600);
    }
  }
`;

export default styles;
