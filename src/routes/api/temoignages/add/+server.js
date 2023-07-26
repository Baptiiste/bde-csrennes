import { v4 as uuidv4 } from 'uuid';
import {db} from "$lib/db/db.js";
export async function POST ({request}){
    let addOk = false
    if(addOk){
        const data = await request.json()
        if(!data.beContacted){
            data.nom = "Anonyme"

        }

        let dataList = [uuidv4(),data.nom, data.title, data.descMission, data.lieu, data.company, data.ambiance, data.salaire, data.wanted, data.beContacted, data.mail, data.tel, data.logementEnt, data.mobilite, data.web, data.whereFinded, data.conseil, data.categorie]
        const insertInto = db.query('INSERT INTO temoignages (id, nom, title, descMission, localisation, company, ambiance, salaire, wanted, beContacted, mail, tel, logementEnt, mobilite, websiteJob, whereFinded, conseil, categorie) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', dataList)
        console.log(insertInto)

        return new Response(JSON.stringify({pass : true}))
    }

}