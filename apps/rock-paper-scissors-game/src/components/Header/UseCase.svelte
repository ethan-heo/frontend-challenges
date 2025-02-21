<script>
  import useMediaQuery from "use-media-query/svelte";
  import common from "./UseCase.common.styles";

  const style = useMediaQuery({});
  const CASES = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
</script>

<ul class={[common, style]}>
  {#each CASES as CASE}
    <li>{CASE}</li>
  {/each}
</ul>
