<script>


    export let menu



    const handleClick = () => {
        menu = !menu
    }


</script>
<span class="button" on:click={handleClick}>
    {#if menu}
    <img src="/others/croix.png" alt="croix" style="height:30px;width:30px;">
    {:else}
        <img src="/others/menu.png" alt="menu" style="height:30px;width:30px;">
    {/if}

</span>

<style lang="scss">
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