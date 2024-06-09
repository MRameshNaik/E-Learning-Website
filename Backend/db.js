const { Pool } = require('pg');
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.PASSWORD,
    port: process.env.DB_PORT || 5432,
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

module.exports = { pool };
