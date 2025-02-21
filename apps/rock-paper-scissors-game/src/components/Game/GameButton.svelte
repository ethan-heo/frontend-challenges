<script>
  import common from "./GameButton.common.styles";
  const { imgSrc = "", label = "" } = $props();
</script>

<button class={common} data-case={label}>
  <img src={imgSrc} alt={label} />
</button>
