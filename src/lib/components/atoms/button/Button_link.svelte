<script>
    import {goto} from "$app/navigation";
    export let fontSize = 18

    export let fn = () => {
        console.log("c'est bon")
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
<span class="button" on:click={handleClick} style="font-size: {fontSize}px;">
    <slot></slot>
</span>

<style lang="scss">
    .button{
      display: flex;
      justify-content: flex-start;




      border-radius: 7px;


      cursor: pointer;
      user-select: none;
      &:hover{
        text-decoration: underline;

      }
    }


</style>