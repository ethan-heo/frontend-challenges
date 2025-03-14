import { css } from "@emotion/css";

const common = css`
  display: flex;
  flex: 1 1 auto;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: 320px;
  opacity: 0;
  transition: opacity 0.2s ease;

  &[data-show="true"] {
    opacity: 1;
  }

  .game-button {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 140px;
    }

    &--text {
      text-align: center;
      color: var(--color-white);
    }

    &--empty {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 120px;
      max-height: 120px;
      border-radius: 50%;
      background-color: var(--color-background-gradient-start);
    }
  }
`;

export default common;
