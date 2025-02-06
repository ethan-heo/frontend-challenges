import { css } from "@emotion/react";

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;

  .cart-empty__desc {
    font-weight: var(--font-weight-600);
    color: var(--color-rose-500);
  }
`;

export default styles;
