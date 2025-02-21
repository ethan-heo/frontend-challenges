import { css } from "@emotion/css";

const common = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--color-white);
  padding: 0 36px;
  border-radius: 8px;
  height: 100px;

  .score {
    &__title {
      color: var(--color-score-text);
      letter-spacing: 2px;
    }
    &__count {
      font-weight: var(--font-weight-700);
      font-size: 2.8rem;
      color: var(--color-dark-text);
    }
  }
`;

export default common;
