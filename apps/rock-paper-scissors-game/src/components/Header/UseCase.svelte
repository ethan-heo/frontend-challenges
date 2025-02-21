<script>
  import common from "./UseCase.common.styles";

  const CASES = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
</script>

<ul class={common}>
  {#each CASES as CASE}
    <li>{CASE}</li>
  {/each}
</ul>
