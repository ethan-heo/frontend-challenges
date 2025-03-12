<script>
  import gameModules from "../../modules/game.svelte";
  import common from "./Score.common.styles";
</script>

<div class={common}>
  <span class="score__title">SCORE</span>
  <strong class="score__count">{gameModules.state.score}</strong>
</div>
