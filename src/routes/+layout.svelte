<script>
import Button_link from "$lib/components/atoms/button/Button_link.svelte";
import {goto} from "$app/navigation";
import Button_menu from "$lib/components/atoms/button/Button_menu.svelte";

//export let data
let gotoHome =() => {
    goto("/")
}

let menuShow = false

let data = {
    layout:true
}
</script>

<div class="view">
    {#if data.layout}
        <div class="header">
            <div class="logo">
                <img src="BDECSRENNES_dark.png" alt="logo BDE" style="height:80px;width:80px;" on:click={gotoHome}/>
            </div>



            <div class="menuTel">
                <Button_menu bind:menu={menuShow}></Button_menu>
            </div>
            <div class="menu">
                <Button_link href="/temoignages">Témoignage d'alternants</Button_link>
                <Button_link href="/PlaquetteAlternantsRennes1A_2023.pdf">Plaquette 1A Rennes</Button_link>
            </div>
        </div>
        {#if menuShow}
            <div class="menuPopUp" on:click={() => {menuShow = false}}>
                <Button_link href="/temoignages">Témoignage d'alternants</Button_link>
                <Button_link href="/PlaquetteAlternantsRennes1A_2023.pdf">Plaquette 1A Rennes</Button_link>
            </div>
        {/if}
    {/if}


        <div class="content" on:click={() => {menuShow = false}}>
            <slot></slot>
        </div>



</div>


<style lang="scss">
  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gadugi', sans-serif;
  }

  @font-face {
    font-family: 'Luminari';
    src: url('/polices/Luminari-Regular.ttf') format('truetype')
  }

  @font-face {
    font-family: 'Hysteria Roller';
    src: url('/polices/Hysteria_Rollers_Sans_Serif.ttf') format('truetype')
  }
  @font-face {
    font-family: 'Gadugi';
    src: url('/polices/Gadugi.ttf') format('truetype')
  }
    .view{
      .header{
        background-color : var(--fond-bde);
        display:flex;
        flex-direction: row;
        height: 100px;
        .logo{
          align-items:center;
          padding: 0px 20px;
          margin-top: auto;
          margin-bottom: auto;
          cursor: pointer;
        }
        @media(max-width: 1100px){
          justify-content: space-between;
          width: 100%;
          .menu{
            display: none;
          }
          .menuTel{
            align-content: end;
            margin-top: auto;
            margin-bottom:auto;
            padding-right: 20px;
          }
        }
        @media(min-width: 1101px){
          .menu{
            padding-left: 30px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 35%;

            align-items: center;
          }
          .menuTel{
            display: none;
          }
        }


      }
      .menuPopUp{
        background-color: var(--fond-bde);
        font-size: 17px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding:20px;
        text-align: center;
        align-content: center;
      }
    }


  :root{
    --logo-cs-rouge : #a2093b;
    --logo-cs-violet : #807093;
    --hover-button : #90153d;
    --fond-bde : #f1e7d3;
  }
</style>