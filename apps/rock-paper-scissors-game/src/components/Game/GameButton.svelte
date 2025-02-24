<script>
  import { ME_STATUS, OTHER_STATUS } from "../../modules/game.module";
  import common from "./GameButton.common.styles";
  const { imgSrc = "", label = "" } = $props();
</script>

<div class={common}>
  <div class="game-button__container">
    <button
      class="game-button__btn"
      data-case={label}
      data-status={ME_STATUS.READY}
    >
      <div class="game-button__btn__inner">
        <img src={imgSrc} alt={label} />
      </div>
    </button>
    <p class="game-button--text">YOU PICKED</p>
  </div>
  <div class="game-button__container">
    <button
      class="game-button__btn"
      data-case={label}
      data-status={OTHER_STATUS.PICKING}
    >
      <div class="game-button__btn__inner">
        <img src={imgSrc} alt={label} />
      </div>
    </button>
    <p class="game-button--text">YOU PICKED</p>
  </div>
</div>
