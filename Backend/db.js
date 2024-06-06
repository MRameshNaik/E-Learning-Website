const { Client } = require('pg');

async function connectToDatabase() {

    const USERNAME = process.env.USERNAME;
    const PASSWORD = process.env.PASSWORD;
    const PORT = process.env.PORT;

    const client = new Client({
        user: USERNAME,
        host: 'localhost',
        database: 'postgres',
        password: PASSWORD,
        port: PORT || 5432,
    });

    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
        
        return client;
    } catch (error) {
        console.error('Error connecting to PostgreSQL database:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
