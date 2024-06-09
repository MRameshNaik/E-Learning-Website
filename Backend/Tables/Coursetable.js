const { pool } = require('../db');


async function checkCoursesTableExists() {
    const client = await pool.connect();
    try {
        const query = `
            SELECT EXISTS (
                SELECT 1
                FROM information_schema.tables
                WHERE table_schema = 'E-learning-Website'
                AND table_name = 'courses'
            )
        `;
        const result = await client.query(query);
        return result.rows[0].exists;
    } catch (error) {
        console.error('Error checking if courses table exists:', error);
        throw error;
    } finally {
        client.release();
    }
}

async function createCoursesTable() {
    const client = await pool.connect();
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS "E-learning-Website".courses (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255),
                new_price DECIMAL(10, 2),
                old_price DECIMAL(10, 2),
                rating DECIMAL(3, 2),
                views INTEGER,
                duration INTEGER
            )
        `;
        await client.query(query);
        console.log('Courses table created successfully');
    } 
    catch (error) {
        console.error('Error creating courses table:', error);
        throw error;
    } 
    finally {
        client.release();
    }
}

module.exports = { checkCoursesTableExists,createCoursesTable };
