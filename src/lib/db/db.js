import mariadb from 'mariadb'
export const data = {
    host : "127.0.0.1",
    user : "root",
    db : "bdecsrennes",
    password:"root"
}

export const pool = mariadb.createPool({host: data.host, user: data.user, database : data.db, password:data.password, connectionLimit: 5});
export const db = await pool.getConnection();