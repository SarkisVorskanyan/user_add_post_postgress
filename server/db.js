import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "Saqo1996",
    host: "localhost",
    port: 5432
})

export default pool