<script>
    import ZoneTem from "$lib/components/molecules/ZoneTem.svelte";

    export let data
    data = data.data[0]

</script>

<div class="view">
    <div class="content">
        <div class="poste">
            <div class="title">
                {data.title}
            </div>
            <div class="company">
                {data.company}
            </div>
        </div>
        <div class="contact">
            <div class="nom">
                {data.nom}
            </div>
            <div class="dataContact">
                <div class="tel">
                    {data.tel}
                </div>
                <div class="mail">
                    {data.mail}
                </div>
            </div>
        </div>
        <div class="infos">
            <div class="descMission">
                <ZoneTem title="Description des missions" text={data.descMission} position="bottom-right" icon="icon2.png"></ZoneTem>
            </div>
            <div class="salaire">
                <ZoneTem title="Salaire et avantages" text={data.salaire} position="bottom-right" icon="icon4.png"></ZoneTem>
            </div>
            <div class="ambiance">
                <ZoneTem title="Ambiance de travail" text={data.ambiance} position="bottom-right" icon="icon1.png"></ZoneTem>
            </div>
            <div class="localisation">
                <div class="lieu">
                    <ZoneTem title="Localisation" text={data.localisation} position="bottom-right" icon="icon1.png"></ZoneTem>
                </div>
                <div class="logementEnt">
                    <ZoneTem title="Logement en entreprise" text={data.logementEnt} position="bottom-right" icon="icon5.png"></ZoneTem>
                </div>
            </div>
            <div class="line">
                <div class="mobilite">
                    <ZoneTem title="Mobilité à l'étranger" text={data.mobilite} position="bottom-right" icon="icon8.png"></ZoneTem>
                </div>
                <div class="whereFinded">
                    <ZoneTem title="Offre trouvée via" text={data.whereFinded} position="bottom-right" icon="icon3.png"></ZoneTem>
                </div>
            </div>
            <div class="site">
                <ZoneTem title="Site d'offres d'emplois de ton entreprise" text={data.websiteJob} position="bottom-right" icon="icon7.png"></ZoneTem>
            </div>
            <div class="conseil">
                <ZoneTem title="Conseils" text={data.conseil} position="bottom-right" icon="icon9.png"></ZoneTem>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .view{
      .content{


        padding-top: 20px;
        padding-bottom: 20px;
        width: min(90%, 1000px);
        margin:auto;
        .poste{
          display: flex;
          flex-direction: row;
          border-radius: 15px;
          background-color: var(--fond-bde);
          padding: 10px;
          .title{
            font-size: 27px;
            width: 60%;
            text-align: left;
            margin: auto;
            font-family: "Hysteria Roller";
          }
          .company{
            width: 40%;
            text-align: right;
            margin: auto;
            font-size: 25px;
            font-family: Gadugi;
          }
        }
        .contact{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 10px;
          font-family: 'Gadugi';

          .nom{
            text-align: left;
            font-size: 25px;
            margin-top: auto;
            margin-bottom: auto ;
          }
          .dataContact{
            text-align: right;
            display: flex;
            flex-direction: column;
            font-family: "SansSerif";
          }

        }
        .infos{
          background-color: var(--fond-bde);
          padding: 25px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          .localisation{
            display: flex;
            flex-direction: row;
            .lieu{
              width: 50%;
            }
            .logementEnt{
              width: 50%;
            }
          }
          .line{
            display: flex;
            flex-direction: row;
            .mobilite{
              width: 50%;
            }
            .whereFinded{
              width: 50%;
            }
          }
        }
      }
    }
</style>