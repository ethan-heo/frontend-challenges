import { GAME_USE_CASE } from "./../../modules/game.module";
import { css } from "@emotion/css";

const common = css`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
  padding: 16px;
  border-bottom: 4px solid transparent;

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

  .game-button__btn__inner {
    border-radius: 50%;
    border-top: 4px solid hsl(217, 16%, 45%, 0.5);
    background: var(--color-white);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default common;
