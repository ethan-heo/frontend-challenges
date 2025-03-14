<script>
  import GameButton from "./GameButton.svelte";
  import common from "./GameReady.common.styles";
  import gameModules, { GAME_BUTTONS } from "../../modules/game.svelte";
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
        <GameButton
          {...GAME_BUTTON}
          pick={() => gameModules.pickMe(GAME_BUTTON.useCase)}
        />
      </li>
    {/each}
  </ul>
</div>
