<script lang="ts">
  import common from "./Rule.common.styles";
  import RuleModal from "./RuleModal.svelte";
  const modal = $state({ active: false });
  const closeModal = () => {
    modal.active = false;
  };
  const openModal = () => {
    modal.active = true;
  };
</script>

<button class={common} onclick={openModal}>RULES</button>
{#if modal.active}
  <RuleModal close={closeModal} />
{/if}
