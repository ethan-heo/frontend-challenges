<script>
  import common from "./RuleModal.common.styles";
  const { close = () => {} } = $props();
</script>

<div class={common}>
  <strong class="rules__title">RULES</strong>
  <img
    class="rules__img"
    src="images/image-rules-bonus.svg"
    alt="Rules for the game"
  />
  <button aria-label="close modal" onclick={() => close()}>
    <img src="images/icon-close.svg" alt="close modal" />
  </button>
</div>
