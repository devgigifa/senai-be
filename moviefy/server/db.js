//criar arquivo db.js
const { Pool } = require('pg')

const pool = new Pool ({
    user: 'postgres', //usuário do seu pc
    host: 'localhost', //host onde esta o postgre
    database: 'moviefy', //nome do banco de dados
    password: 'postgres', //senha do pgAdmin
    port: 5432, //padrao do postgres
})

module.exports = { pool };
