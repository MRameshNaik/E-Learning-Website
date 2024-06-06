const { connectToDatabase } = require('../db');


async function createUser(username, email, password) {

    const client = await connectToDatabase();
    try {
        const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id';

        const values = [username, email, password];
        const result = await client.query(query, values);

        return result.rows[0].id;
    } 
    finally {
        await client.end();
    }
}


async function getUsers() {
    
    const client = await connectToDatabase();
    try {
        const query = 'SELECT id, username, email FROM users';
        const result = await client.query(query);
        return result.rows;
    } 
    finally {
        await client.end();
    }
}

module.exports = { createUser, getUsers };
