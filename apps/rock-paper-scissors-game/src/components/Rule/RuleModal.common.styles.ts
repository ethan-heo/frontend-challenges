import { css } from "@emotion/css";

const common = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-white);

  .rules {
    &__title {
      font-size: 1.6rem;
      font-weight: var(--font-weight-700);
    }
    &__img {
      width: 100%;
      max-width: 480px;
      height: auto;
    }
  }
`;

export default common;
