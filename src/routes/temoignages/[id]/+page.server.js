import {db} from "$lib/db/db.js";



export async function load({request, params}){

    const rows = await db.query(`SELECT * FROM temoignages WHERE id="${params.id}"`);

    return {
        pass:true,
        data :rows
    }
}