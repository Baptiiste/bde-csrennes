<script>
    import {goto} from "$app/navigation";

    export let fn = () => {

    }

    export let href

    const handleClick = () => {
        if (href) {
            goto(href)

        } else {
            fn()
        }
    }
</script>
<span class="button" on:click={handleClick}>
    <img src="/others/member.png" alt="member" style="height:30px;width:30px;">
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