<script>
    export let title;
    export let text;
    export let icon

    export let position;

    let isWeb = text[0] +text[1] +text[2] +text[3]
</script>

<div class="view">

    <div class="content">
        <div class="title">
            {title}
        </div>
        <div class="text">
            {#if isWeb === "http"}
                <a href="{text}">{text}</a>
            {:else}
                {text}
            {/if}

        </div>


            {#if position === "top-right"}
                <div class="top-right">
                    <img src="/temoignages/icon/{icon}" style="height:50px;width:50px;">
                </div>
            {/if}
            {#if position === "bottom-right"}
                <div class="bottom-right">
                    <img src="/temoignages/icon/{icon}" style="height:50px;width:50px;">
                </div>
            {/if}
            {#if position === "bottom-left"}
                <div class="bottom-left">
                    <img src="/temoignages/icon/{icon}" style="height:50px;width:50px;">
                </div>
            {/if}


    </div>
</div>

<style lang="scss">
    .view{

      .content{
        display: flex;
        flex-direction: column;

      position:relative;
      background-color: white;
      min-height: 50px;
        margin: 10px;
        border-radius: 5px;
        .title{
          font-weight: bold;
          position: absolute;
          left:-3px;
          top:-15px;
          font-size: 20px;
          font-family: "Hysteria Roller";
          @media(max-width: 1000px){
            font-size: 14px;
          }
        }
        .text{
          margin-top: auto;
          margin-bottom: auto;
          padding: 15px 15px;
          font-family: "Gadugi";
          text-align: justify;
          @media(max-width: 1000px){
            font-size: 11px;
          }
        }
      .bottom-right{
        position:absolute;
        bottom: -20px;
        right: -20px;
      }
      .bottom-left{
        position:absolute;
        bottom: -20px;
        left: -20px;
      }
      .top-right{
        position:absolute;
        top: -20px;
        right: -20px;
      }

      }
    }

</style>