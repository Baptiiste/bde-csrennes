<script>
    import Button from "$lib/components/atoms/button/Button.svelte";

    export let title;
    export let localisation;
    export let id;

    export let company

</script>

<div class="view">
    <div class="content">

        <div class="data">
            <div class="title">
                {title}
            </div>
            <div class="company">
                {company}
            </div>
            <div class="lieu">
                {localisation}
            </div>
        </div>
        <div class="button">
            <Button href="/temoignages/{id}">Voir</Button>
        </div>
    </div>
    <div class="line">

    </div>
</div>

<style lang="scss">
    .view{
      display: flex;
      flex-direction: column;
      width: 100%;
      .content{
        margin: auto;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
        width: 100%;
        padding: 15px;
        .data{
          display:flex;
          flex-direction: column;
          text-align: left;
          .title{
            font-size: 25px;
            font-weight: bold;
            @media(max-width: 600px){
              font-size: 22px;
            }
          }
          .company{
            font-size: 22px;
            @media(max-width: 600px){
              font-size: 19px;
            }
          }
          .lieu{
            font-size: 17px;
            @media(max-width: 600px){
              font-size: 15px;
            }
          }
        }
        .button{
            margin-top: auto;
            margin-bottom: auto;
        }
      }
      .line{
        border: solid black 2px;
        width: 100%;
        height: 2px;
      }
    }
</style>