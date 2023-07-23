<script>
import TemCard from "$lib/components/molecules/TemCard.svelte";
import Text from "$lib/components/atoms/input/Text.svelte";
import List from "$lib/components/atoms/input/List.svelte";

let errors  = []
let notif = []
export let data
let cat = [["","Toutes"]]
console.log(data)
for(let i = 0; i < data.cat.length; i++){
    cat.push([data.cat[i].categorie,data.cat[i].categorie])
}
let assos = data.assos

 let search = {
    title : '',
     company : "",
     lieu : "",
     categorie:"",


 }

let updateSearch = () => {
    errors = []

        fetch("/api/temoignages/updateSearch", {
            method : "POST",
            body : JSON.stringify(search),
            headers : {
                "Content-Type" : 'application/json'
            },
        }).then(res => {
            return res.json()
        }).then(res => {
            //console.log(res)
            assos = res.data
            console.log(assos)
        }).catch(e => {
            console.log(e)
        })

}

</script>

<div class="view">
    <div class="content">
        <div class="head">
            <div class="nom">
                Témoignages d'alternants
            </div>
            <div class="subtitle">
                Tu trouveras ici différents témoignages de tes prédécésseurs, en espérant qu'ils puissent t'aider dans ta recherche ! Si tu as des questions, n'hesite pas à les contacter !
            </div>
        </div>
        <div class="search">
            <div class="title">
                <Text label="Titre du poste" bind:value={search.title} fn={updateSearch}></Text>
            </div>
            <div class="company">
                <Text label="Entreprise" bind:value={search.company} fn={updateSearch}></Text>
            </div>
            <div class="lieu">
                <Text label="Lieu" bind:value={search.lieu} fn={updateSearch}></Text>
            </div>
            <div class="categorie">
                <List label="Catégorie" bind:value={search.categorie} options={cat} fn={updateSearch}></List>
            </div>
        </div>
        <div class="list">
            {#each assos as card}
                <TemCard id="{card.id}" title="{card.title}" localisation="{card.localisation}" company="{card.company}"></TemCard>
            {/each}
        </div>

    </div>
</div>

<style lang="scss">
    .view{
      .content{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: max(70%, 450px);
        margin:auto;
        .head{
          .nom{
            font-weight: bold;
            font-size: 30px;
            text-align: center;
            margin: auto;
            padding-top: 10px;
          }
          .subtitle{
            padding: 10px;
            text-align: center;
          }
        }
        .search{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          @media(max-width: 1100px){
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: auto;
            align-items: center;
          }
        }
      }
    }
</style>