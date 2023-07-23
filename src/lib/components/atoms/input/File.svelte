<script>
    export let input
    export let label
    export let value
    export let fn = () => {}
</script>
<div class="view">
    <span>{label}</span>
    <input id="inputFile" type="file" accept="image/png, image/jpeg" bind:this={input} on:change={fn} bind:value={value}>
</div>

<style lang="scss">
  .view{
    display: flex;
    flex-direction: row;
    gap:10px;
    margin: auto;
  }
</style>