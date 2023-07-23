<script>
    import {goto} from "$app/navigation";

    export let fn = () => {
        console.log("c'est bon")
    }

    export let href
    export let disabled = false

    const handleClick = () => {
        if (href) {
            goto(href)

        } else {
            fn()
        }
    }
</script>
{#if disabled}
     <span class="buttonD">
    <slot></slot>
</span>
{:else}
    <span class="button" on:click={handleClick}>
    <slot></slot>
</span>
{/if}


<style lang="scss">
  .buttonD{
    display: flex;
    justify-content: flex-start;

    background-color: var(--logo-cs-violet);
    color: white;
    padding: 7px 15px;
    border-radius: 7px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
  }
    .button{
      display: flex;
      justify-content: flex-start;

      background-color: var(--logo-cs-rouge);
      color: white;
      padding: 7px 15px;
      border-radius: 7px;
      font-size: 18px;
      cursor: pointer;
      user-select: none;
      &:hover{
        background-color: var(--hover-button);
      }
    }


</style>