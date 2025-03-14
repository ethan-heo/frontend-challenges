import { css } from "@emotion/css";

const common = css`
  align-items: center;
  margin-bottom: 48px;
  opacity: 0;
  transition: opacity 1s ease;

  &[data-show="true"] {
    opacity: 1;
  }

  .game-result {
    &__status {
      font-size: 2rem;
      font-weight: var(--font-weight-700);
      color: var(--color-white);
      margin-bottom: 10px;
      text-align: center;
    }

    &__try-again-btn {
      background-color: var(--color-white);
      color: var(--color-dark-text);
      border-radius: 8px;
      width: 180px;
      padding: 12px 0;
      font-size: 0.8rem;
      font-weight: var(--font-weight-700);
    }
  }
`;

export default common;
