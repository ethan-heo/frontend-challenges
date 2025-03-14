<script>
  import useMediaQuery from "use-media-query/svelte";
  import common from "./Header.common";
  import desktop from "./Header.desktop";
  import UseCase from "./UseCase.svelte";
  import Score from "./Score.svelte";

  const style = useMediaQuery({
    desktop,
  });
</script>

<div class={[common, style]}>
  <UseCase />
  <Score />
</div>
