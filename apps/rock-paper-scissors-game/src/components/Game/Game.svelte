<script>
  import common from "./Game.common.styles";
  import GameButton from "./GameButton.svelte";

  const BUTTONS = [
    {
      imgSrc: "images/icon-scissors.svg",
      label: "scissors",
    },
    {
      imgSrc: "images/icon-paper.svg",
      label: "paper",
    },
    {
      imgSrc: "images/icon-rock.svg",
      label: "rock",
    },
    {
      imgSrc: "images/icon-lizard.svg",
      label: "lizard",
    },
    {
      imgSrc: "images/icon-spock.svg",
      label: "spock",
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
