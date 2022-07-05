const Pool = require('pg').Pool;

const pool = new Pool({
    user: "alokrai",
    password: "10225588",
    host: "localhost",
    port: 5432,
    database: "communicationdb"
});


module.exports = pool;