<script lang="ts">
  import mobile from "./App.mobile.styles";
  import useMediaQuery from "use-media-query/svelte";
  import tablet from "./App.tablet.styles";
  import desktop from "./App.desktop.styles";
  import Header from "./components/Header/Header.svelte";

  const { style } = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
</script>

<main class={$style}>
  <Header />
</main>
