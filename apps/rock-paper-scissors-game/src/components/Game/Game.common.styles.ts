import { css } from "@emotion/css";

const common = css`
  position: relative;
  width: 60%;
  max-width: 480px;
  margin: 0 auto;

  .game {
    &__bg {
      width: 100%;
      height: auto;
    }
  }

  .game__button-list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &_item {
      position: absolute;

      &:nth-child(1) {
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
      }
      &:nth-child(2) {
        right: 0;
        top: 23%;
        transform: translateX(50%);
      }
      &:nth-child(3) {
        right: 4%;
        bottom: 0;
        transform: translateY(50%);
      }
      &:nth-child(4) {
        left: 4%;
        bottom: 0;
        transform: translateY(50%);
      }
      &:nth-child(5) {
        left: 0;
        top: 23%;
        transform: translateX(-50%);
      }
    }
  }
`;

export default common;
