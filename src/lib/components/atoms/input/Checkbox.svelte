<script>
    export let label = ""
    export let fn = () => {
        checked = !checked
        if(checked){
            value = 1
        } else {
            value = 0
        }
    }

    export let value

    export let checked = false

</script>

<div class="view">
    <span>{label}</span>
    {#if checked}
        <input type="checkbox" on:change={fn} checked>
    {:else}
        <input type="checkbox" on:change={fn}>
    {/if}

</div>

<style lang="scss">
    .view{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
</style>