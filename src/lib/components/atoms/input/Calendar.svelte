<script>
    export let label = ""
    export let fn = () => {}
    export let value = Date.now()
</script>

<div class="view">
    <span>{label}</span>
    <input type="date" bind:value={value} on:change={fn}>
</div>

<style lang="scss">
  .view{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>