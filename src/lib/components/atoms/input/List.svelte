<script>
    export let options
    export let value
    export let fn = () => {}
    export let width = 150
    export let title = ""
    export let label
</script>
<div class="view">
    <span class="label">{label}</span>
    <select bind:value={value} on:change={fn} style="width:{width}px">
        {#if title !== ""}
            <option disabled>{title}</option>
        {/if}
        {#each options as option}
            <option value={option[0]} >{option[1]}</option>
        {/each}

    </select>
</div>
<style lang="scss">
  .view{
    align-items: flex-start;
    display:flex;
    flex-direction: column;


  }

</style>