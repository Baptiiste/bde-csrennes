import mariadb from 'mariadb'
import {db} from "$lib/db/db.js";



export async function load({request, params}){

    const rows = await db.query("SELECT id,title, company, localisation, categorie FROM temoignages");
    const cat = await db.query("SELECT categorie FROM categorie");

    return {
        pass:true,
        assos :rows,
        cat : cat
    }
}

