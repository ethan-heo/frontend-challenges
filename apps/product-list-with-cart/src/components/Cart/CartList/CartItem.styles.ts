import { css } from "@emotion/react";

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-rose-100);
  padding: 16px 0;

  .cart-item {
    &__product-name {
      display: block;
      color: var(--color-rose-900);
      font-weight: var(--font-weight-600);
      margin-bottom: 12px;
    }

    &__remove-item {
      display: flex;
      width: 20px;
      height: 20px;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      border: 2px solid var(--color-rose-300);
      background-color: transparent;
    }

    &__product-info {
      display: flex;
      gap: 12px;

      &__quantity {
        color: var(--color-red);
        font-weight: var(--font-weight-600);
      }

      &__price {
        color: var(--color-rose-300);
      }

      &__total-price {
        color: var(--color-rose-500);
        font-weight: var(--font-weight-600);
      }
    }
  }
`;

export default styles;
