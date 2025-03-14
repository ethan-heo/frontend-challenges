<script>
  import gameModules from "../../modules/game.svelte";
  import { GAME_STATUS } from "../../modules/game.module";
  import GamePlay from "./GamePlay.svelte";
  import GameReady from "./GameReady.svelte";
  import GameResult from "./GameResult.svelte";
  import common from "./Game.common.styles";
</script>

{#if gameModules.state.status === GAME_STATUS.READY}
  <GameReady />
{:else}
  <div class={common}>
    <GamePlay />
    <GameResult />
  </div>
{/if}
