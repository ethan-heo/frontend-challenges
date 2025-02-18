<script>
  import useMediaQuery from "use-media-query/svelte";
  import common from "./Header.common";
  import desktop from "./Header.desktop";

  const style = useMediaQuery({
    desktop,
  });
</script>

<div class={[common, style]}>
  <div>A</div>
  <div>B</div>
</div>
