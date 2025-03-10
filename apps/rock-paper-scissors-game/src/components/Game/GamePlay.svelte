<script>
  // @ts-nocheck

  import GameButton from "./GameButton.svelte";
  import common from "./GamePlay.common.styles";
  import { GAME_BUTTONS } from "./Game.constants";

  const picked = 0;
</script>

<div class={common}>
  <div class="game-button__container">
    <GameButton {...GAME_BUTTONS[0]} />
    <p class="game-button--text">YOU PICKED</p>
  </div>
  <div class="game-button__container">
    {#if 0 === 1}
      <GameButton {...GAME_BUTTONS[0]} />
    {:else}
      <div class="game-button--empty"></div>
    {/if}
    <p class="game-button--text">THE HOUSE PICKED</p>
  </div>
</div>
