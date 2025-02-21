import { css } from "@emotion/css";

const common = css`
  display: block;
  width: 22vw;
  height: 22vw;
  max-width: 180px;
  max-height: 180px;
  border-radius: 50%;
  border: 12px solid transparent;
  background-color: var(--color-white);

  img {
    width: 60%;
    height: auto;
  }

  &[data-case="scissors"] {
    border-color: var(--color-scissors-gradient-start);
  }
  &[data-case="paper"] {
    border-color: var(--color-paper-gradient-start);
  }
  &[data-case="rock"] {
    border-color: var(--color-rock-gradient-start);
  }
  &[data-case="lizard"] {
    border-color: var(--color-lizard-gradient-start);
  }
  &[data-case="spock"] {
    border-color: var(--color-spock-gradient-start);
  }
`;

export default common;
