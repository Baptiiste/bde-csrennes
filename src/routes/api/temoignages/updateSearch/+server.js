import {db} from "$lib/db/db.js";
import {escape} from "$lib/scripts/string.utils.js";

export async function POST ({request}){
    const body = await request.json()
    const rows = await db.query(`SELECT id, title, company, localisation, categorie FROM temoignages WHERE title LIKE "%${escape(body.title)}%" AND company LIKE "%${escape(body.company)}%" AND localisation LIKE "%${escape(body.lieu)}%" AND categorie LIKE "%${escape(body.categorie)}%"`)


    return new Response(JSON.stringify({
        pass:true,
        data:rows
    }))
}