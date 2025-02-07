import { css } from "@emotion/react";

const styles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--color-rose-50);

  .order-confirm-item {
    &__total-price {
      color: var(--color-rose-900);
      font-weight: var(--font-weight-600);
    }

    &__product {
      display: flex;
      align-items: center;
      gap: 12px;

      &__image img {
        display: block;
        width: 56px; // ? max-width를 사용하면 빈 영역이 발생
        height: 56px;
        border-radius: 4px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & > div {
          display: flex;
          gap: 12px;
        }

        &__name {
          color: var(--color-rose-900);
          font-weight: var(--font-weight-600);
        }

        &__quantity {
          color: var(--color-red);
          font-weight: var(--font-weight-600);
        }

        &__price {
          color: var(--color-rose-300);
        }
      }
    }
  }
`;

export default styles;
