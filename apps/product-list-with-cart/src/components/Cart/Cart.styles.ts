import { css } from "@emotion/react";

const styles = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 28px 24px;
  background-color: var(--color-rose-50);
  border-radius: 12px;

  h2 {
    font-size: 1.6rem;
    font-weight: var(--font-weight-600);
    color: var(--color-red);
    min-width: 320px;
  }
`;

export default styles;
