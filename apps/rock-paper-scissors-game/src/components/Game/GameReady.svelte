<script>
  import GameButton from "./GameButton.svelte";
  import common from "./GameReady.common.styles";
  import { GAME_BUTTONS } from "./Game.constants";
</script>

<div class={common}>
  <img
    class="game__bg"
    src="images/bg-pentagon.svg"
    alt="pentagon background"
  />
  <ul class="game__button-list">
    {#each GAME_BUTTONS as GAME_BUTTON}
      <li class="game__button-list_item">
        <GameButton {...GAME_BUTTON} />
      </li>
    {/each}
  </ul>
</div>
