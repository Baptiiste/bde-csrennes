<script>
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    let gotoTem = () => {
        goto('/temoignages')
    }




</script>

<div class="main" on:click={gotoTem()}>

</div>