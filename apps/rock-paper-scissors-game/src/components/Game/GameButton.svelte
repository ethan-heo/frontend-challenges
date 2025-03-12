<script>
  import common from "./GameButton.common.styles";
  const { imgSrc = "", useCase = "", pick = () => {} } = $props();
</script>

<button
  class={common}
  data-use-case={useCase}
  onclick={() => {
    pick();
  }}
>
  <div class="game-button__btn__inner">
    <img src={imgSrc} alt={useCase} />
  </div>
</button>
