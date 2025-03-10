<script>
  import common from "./GameButton.common.styles";
  const { imgSrc = "", useCase = "" } = $props();
</script>

<button class={common} data-use-case={useCase}>
  <div class="game-button__btn__inner">
    <img src={imgSrc} alt={useCase} />
  </div>
</button>
