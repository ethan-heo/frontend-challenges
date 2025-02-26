import { GAME_USE_CASE } from "./../../modules/game.module";
import { css } from "@emotion/css";

const common = css`
  display: flex;
  justify-content: space-between;

  .game-button--text {
    color: var(--color-white);
  }

  .game-button__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .game-button__btn {
    display: block;
    width: 22vw;
    height: 22vw;
    max-width: 180px;
    max-height: 180px;
    border-radius: 50%;
    padding: 16px;
    border-bottom: 6px solid transparent;

    img {
      width: 45%;
      height: auto;
    }

    &[data-use-case="${GAME_USE_CASE.SCISSORS}"] {
      background-color: var(--color-scissors-gradient-end);
      border-color: var(--color-scissors-gradient-start);
    }
    &[data-use-case="${GAME_USE_CASE.PAPER}"] {
      background-color: var(--color-paper-gradient-end);
      border-color: var(--color-paper-gradient-start);
    }
    &[data-use-case="${GAME_USE_CASE.ROCK}"] {
      background-color: var(--color-rock-gradient-end);
      border-color: var(--color-rock-gradient-start);
    }
    &[data-use-case="${GAME_USE_CASE.LIZARD}"] {
      background-color: var(--color-lizard-gradient-end);
      border-color: var(--color-lizard-gradient-start);
    }
    &[data-use-case="${GAME_USE_CASE.SPOCK}"] {
      background-color: var(--color-spock-gradient-end);
      border-color: var(--color-spock-gradient-start);
    }

    &__inner {
      border-radius: 50%;
      border-top: 4px solid hsl(217, 16%, 45%, 0.5);
      background: var(--color-white);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* .game-button {
    &__btn {
      &__inner {
        border-top: none;
        background-color: hsl(237, 49%, 15%, 0.5);
      }

      img {
        display: none;
      }
    }
  } */
`;

export default common;
