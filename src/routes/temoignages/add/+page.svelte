<script>
    import Text from "$lib/components/atoms/input/Text.svelte";
    import Textarea from "$lib/components/atoms/input/Textarea.svelte";
    import Checkbox from "$lib/components/atoms/input/Checkbox.svelte";
    import Button from "$lib/components/atoms/button/Button.svelte";
    import List from "$lib/components/atoms/input/List.svelte";

    export let data
    let cat = []
    for(let i = 0; i < data.data.length; i++){
        cat.push([data.data[i].categorie,data.data[i].categorie])
    }

    let errors = []
    let notif = []
    data = {
        nom:"",
        title:"",
        descMission:"",
        salaire:"",
        ambiance:"",
        lieu:"",
        wanted:0,
        beContacted:0,
        mail:"",
        tel:"",
        conseil:"",
        company:"",
        whereFinded:"",
        web:"",
        logementEnt:"",
        mobilite:"",
        categorie:""
    }

    let addTem = () => {
        errors = []
        if(data.title !== ""){
            fetch("/api/temoignages/add", {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : 'application/json'
                },
            }).then(res => {
                return res.json()
            }).then(res => {
                notif = ['Le témoignage a été ajouté']
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<div class="view">
    <div class="titre">
        <h3>Ajouter un témoignage</h3>
    </div>

    <div class="Catégorie">
        <List label="Catégorie" bind:value={data.categorie} options={cat}></List>
    </div>
    <div class="title">
        <Text label="Titre" bind:value={data.title}></Text>
    </div>
    <div class="nom">
        <Text label="Nom" bind:value={data.nom}></Text>
    </div>

    <div class="beContacted">
        <Checkbox label="Est-ce que tu veux être contacté" bind:value={data.beContacted}></Checkbox>
    </div>
    {#if data.beContacted}
        <div class="mail">
            <Text label="Mail" bind:value={data.mail}></Text>
        </div>
        <div class="tel">
            <Text label="tel" bind:value={data.tel}></Text>
        </div>
    {/if}
    <div class="company">
        <Text label="Entreprise" bind:value={data.company}></Text>
    </div>
    <div class="descMission">
        <Textarea label="Description des missions" bind:value={data.descMission}></Textarea>
    </div>
    <div class="ambiance">
        <Textarea label="Ambiance" bind:value={data.ambiance}></Textarea>
    </div>
    <div class="salaire">
        <Textarea label="Salaire et avantages" bind:value={data.salaire}></Textarea>
    </div>
    <div class="lieu">
        <Text label="Lieu" bind:value={data.lieu}></Text>
    </div>
    <div class="mobilite">
        <Text label="Mobilité à l'étranger ?" bind:value={data.mobilite}></Text>
    </div>
    <div class="logementEnt">
        <Text label="Logement en entreprise" bind:value={data.logementEnt}></Text>
    </div>
    <div class="whereFinded">
        <Text label="Où as tu trouvé l'offre" bind:value={data.whereFinded}></Text>
    </div>
    <div class="web">
        <Text label="Site d'offre d'emploi de ton entreprise" bind:value={data.web}></Text>
    </div>
    <div class="wanted">
        <Checkbox label="Est ce que c'est ce que tu voulais ?" bind:value={data.wanted}></Checkbox>
    </div>
    <div class="conseil">
        <Text label="Des conseils pour les prochains 1A ?" bind:value={data.conseil}></Text>
    </div>
    <div class="button">
        <Button fn={addTem}>Valider</Button>
    </div>
</div>

<style lang="scss">
    .view{
      display: flex;
      flex-direction: column;
      margin:auto;
      width: 80%;
      .titre{
        margin: auto;
      }
    }
</style>