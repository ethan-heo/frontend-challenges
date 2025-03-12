<script lang="ts">
  import GameButton from "./GameButton.svelte";
  import common from "./GamePlay.common.styles";
  import { GAME_STATUS } from "../../modules/game.module";
  import gameModules from "../../modules/game.svelte";
  import { onMount } from "svelte";

  const { state } = gameModules;

  onMount(() => {
    window.setTimeout(() => {
      gameModules.playWithHouse();
    }, 2000);
  });
</script>

<div class={common}>
  <div class="game-button__container">
    <GameButton {...state.playing.pickedMe} />
    <p class="game-button--text">YOU PICKED</p>
  </div>
  <div class="game-button__container">
    {#if state.status === GAME_STATUS.DONE}
      <GameButton {...state.playing.pickedOther} />
    {:else}
      <div class="game-button--empty"></div>
    {/if}
    <p class="game-button--text">THE HOUSE PICKED</p>
  </div>
</div>
