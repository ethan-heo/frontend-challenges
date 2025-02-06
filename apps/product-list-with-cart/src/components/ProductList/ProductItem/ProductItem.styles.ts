import { css } from "@emotion/react";

const styles = css`
  figure {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .product-item__img-box {
    position: relative;
    border-radius: 8px;
    border: 2px solid transparent;

    &[data-selected="true"] {
      border-color: var(--color-red);
    }

    & > picture img {
      display: block;
      width: 100%; // ? max-width를 사용하면 빈 영역이 발생
      height: auto;
      border-radius: 8px;
    }
  }

  .product-item__info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__category {
      color: var(--color-rose-300);
    }

    &__name {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-rose-900);
    }

    &__price {
      font-size: 1.2rem;
      color: var(--color-red);
      font-weight: 700;
    }
  }
`;

export default styles;
