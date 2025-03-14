<script>
  import common from "./GameButton.common.styles";
  const { imgSrc = "", useCase = "", wave = false, pick = () => {} } = $props();
</script>

<button
  class={common}
  data-use-case={useCase}
  data-wave={wave}
  onclick={() => {
    pick();
  }}
>
  <div class="game-button__btn__inner">
    <img src={imgSrc} alt={useCase} />
  </div>
</button>
