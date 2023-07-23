import {db} from "$lib/db/db.js";

export async function POST ({request}){
    const body = await request.json()
    const rows = await db.query(`SELECT id, title, company, localisation, categorie FROM temoignages WHERE title LIKE "%${body.title}%" AND company LIKE "%${body.company}%" AND localisation LIKE "%${body.lieu}%" AND categorie LIKE "%${body.categorie}%"`)


    return new Response(JSON.stringify({
        pass:true,
        data:rows
    }))
}