export async function load({request, params}){
    if(params.id === undefined){
        return {
            layout : true
        }
    } else {
        return {
            layout : false
        }
    }
}