import { css } from "@emotion/react";

const styles = css`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 28px;
  height: 48px;
  width: 180px;

  &[data-selected="true"] {
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-red);
    color: var(--color-rose-50);

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--color-rose-50);
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-radius: 100%;
    }
  }

  &:not([data-selected="true"]) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--color-rose-50);
    border: 2px solid var(--color-rose-300);
    font-weight: var(--font-weight-600);
  }
`;

export default styles;
