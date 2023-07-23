<script>
    export let value
    export let label = ""
    export let fn = () => {

    }
    export let width = 200
    export let widthp = ""

</script>

<div class="input">

    <span class="label">{label}</span>
    {#if widthp === ""}
    <textarea bind:value={value} on:keyup={fn} style="width:{width}px"/>
    {:else}
        <textarea bind:value={value} on:keyup={fn} style="width:{widthp}%;"/>
    {/if}
</div>


<style lang="scss">
  .input{
    align-items: flex-start;
    display:flex;
    flex-direction: column;


  }

</style>