<script>
  import common from "./GameButton.common.styles";
  import HouseGameButton from "./HouseGameButton.svelte";
  const { imgSrc = "", useCase = "", picked = false } = $props();
</script>

<div class={common} data-picked={picked}>
  <div class="game-button__container">
    <button class="game-button__btn" data-use-case={useCase}>
      <div class="game-button__btn__inner">
        <img src={imgSrc} alt={useCase} />
      </div>
    </button>
    <p class="game-button--text">YOU PICKED</p>
  </div>
  {#if picked === true}
    <svelte:component this={HouseGameButton} />
  {/if}
</div>
