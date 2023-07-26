import mariadb from 'mariadb'
export const data = {
    host : "bde-csrennes.rezo-rm.fr",
    user : "root",
    db : "bdecsrennes",
    password:"root"
}

export const pool = mariadb.createPool({host: data.host, user: data.user, database : data.db, password:data.password, connectionLimit: 5});
export const db = await pool.getConnection();