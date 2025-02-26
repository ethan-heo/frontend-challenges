<script>
  import common from "./GameButton.common.styles";
  import houseCommon from "./HouseGameButton.common.styles";
</script>

<div class={[common, houseCommon]} data-picked={false}>
  <div class="game-button__container">
    <button class="game-button__btn">
      <div class="game-button__btn__inner">
        <img src="images/icon-rock.svg" alt="rock" />
      </div>
    </button>
    <p class="game-button--text">THE HOUSE PICKED</p>
  </div>
</div>
