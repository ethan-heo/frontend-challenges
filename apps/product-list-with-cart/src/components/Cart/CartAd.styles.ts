import { css } from "@emotion/react";

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: var(--color-rose-100);
  border-radius: 8px;
  padding: 20px 24px;

  .cart-ad {
    &__desc {
      color: var(--color-rose-500);
    }

    &--highlight {
      font-weight: var(--font-weight-600);
      color: var(--color-rose-900);
    }
  }
`;

export default styles;
