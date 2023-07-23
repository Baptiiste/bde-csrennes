<script>
    import List from "$lib/components/atoms/input/List.svelte";

    export let label = ""
    export let fn = () => {}

    export let monthValue = new Date(Date.now()).getMonth().toString()
    export let yearValue = new Date(Date.now()).getFullYear().toString()
    const months = [[1, "Janvier"], [2, "Février"], [3, "Mars"], [4, "Avril"], [5, "Mai"], [6, "Juin"], [7, "Juillet"], [8, "Août"], [9, "Septembre"], [10, "Octobre"], [11, "Novembre"], [12, "Décembre"]]
    const years = [[2021, "2021"], [2022, "2022"], [2023, "2023"]]
</script>

<div class="view">
    <span>{label}</span>
    <List options={months} bind:value={monthValue} width="100" fn={fn}></List>
    <List options={years} bind:value={yearValue} width="100" fn={fn}></List>
</div>

<style lang="scss">
    .view{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
</style>