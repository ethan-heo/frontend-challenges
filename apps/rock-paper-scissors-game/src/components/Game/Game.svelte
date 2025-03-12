<script>
  import gameModules from "../../modules/game.svelte";
  import { GAME_STATUS } from "../../modules/game.module";
  import GamePlay from "./GamePlay.svelte";
  import GameReady from "./GameReady.svelte";
</script>

{#if gameModules.state.status === GAME_STATUS.READY}
  <GameReady />
{:else}
  <GamePlay />
{/if}
