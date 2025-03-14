<script lang="ts">
  import { GAME_PLAYING_STATUS, GAME_STATUS } from "../../modules/game.module";
  import gameModules from "../../modules/game.svelte";
  import common from "./GameResult.common.styles";
</script>

<div class={common} data-show={gameModules.state.status === GAME_STATUS.DONE}>
  <p class="game-result__status">
    {#if gameModules.state.playing.status === GAME_PLAYING_STATUS.WIN}
      YOU WIN
    {:else if gameModules.state.playing.status === GAME_PLAYING_STATUS.DEFEAT}
      YOU DEFEAT
    {:else}
      YOU TIED
    {/if}
  </p>
  <button
    class="game-result__try-again-btn"
    onclick={() => gameModules.tryAgain()}>PLAY AGAIN</button
  >
</div>
