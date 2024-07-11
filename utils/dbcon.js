import mysql from "mysql2/promise";

export const dbPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Rovi123',
    port: '3306',
    database: 'kelasdotcom',
});

