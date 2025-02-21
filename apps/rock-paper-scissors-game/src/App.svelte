<script lang="ts">
  import useMediaQuery from "use-media-query/svelte";
  import desktop from "./App.desktop.styles";
  import Header from "./components/Header/Header.svelte";
  import Game from "./components/Game/Game.svelte";
  import Rule from "./components/Rule.svelte";
  import common from "./App.common.styles";
  import RuleModal from "./components/RuleModal.svelte";

  const style = useMediaQuery({
    desktop,
  });
</script>

<main class={[common, $style]}>
  <Header />
  <Game />
  <Rule />
  <RuleModal />
</main>

<style>
</style>
