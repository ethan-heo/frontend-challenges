<script>
  import { GAME_USE_CASE } from "../../modules/game.module";
  import common from "./Game.common.styles";
  import GameButton from "./GameButton.svelte";

  const BUTTONS = [
    {
      imgSrc: "images/icon-scissors.svg",
      useCase: GAME_USE_CASE.SCISSORS,
    },
    {
      imgSrc: "images/icon-paper.svg",
      useCase: GAME_USE_CASE.PAPER,
    },
    {
      imgSrc: "images/icon-rock.svg",
      useCase: GAME_USE_CASE.ROCK,
    },
    {
      imgSrc: "images/icon-lizard.svg",
      useCase: GAME_USE_CASE.LIZARD,
    },
    {
      imgSrc: "images/icon-spock.svg",
      useCase: GAME_USE_CASE.SPOCK,
    },
  ];
</script>

<div class={common}>
  <img
    class="game__bg"
    src="images/bg-pentagon.svg"
    alt="pentagon background"
  />
  <ul class="game__button-list">
    {#each BUTTONS as BUTTON}
      <li class="game__button-list_item">
        <svelte:component this={GameButton} {...BUTTON} />
      </li>
    {/each}
  </ul>
</div>
