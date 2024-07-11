import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Sn87017709306",
    port: 5432,
    database: "postgres"
})  

export default pool;