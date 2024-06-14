const { pool } = require('../db');

async function createCourses(course) {
    const { name, image, new_price, old_price, rating, views, duration } = course;

    if (!name || !image || typeof new_price !== 'number' || typeof old_price !== 'number' || typeof rating !== 'number' || typeof views !== 'number' || typeof duration !== 'number') {
        throw new Error('Invalid input');
    }

    const client = await pool.connect();
    try {

        const query = `
            INSERT INTO "E-learning-Website".courses 
            (name, image, new_price, old_price, rating, views, duration) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING id
        `;

        const values = [name, image, new_price, old_price, rating, views, duration];
        const result = await client.query(query, values);

        return result.rows[0].id;
    } 
    catch (error) {
        console.error('Error creating course:', error);
        throw error;
    } 
    finally {
        client.release();
    }
}

async function getCourses() {
    const client = await pool.connect();
    try {
        const query = `SELECT id, name, image, new_price, old_price, rating, views, duration FROM "E-learning-Website".courses`;
        const result = await client.query(query);
        return result.rows;
    } 
    catch (error) {
        console.error('Error getting courses:', error);
        throw error;
    } 
    finally {
        client.release();
    }
}

module.exports = { createCourses, getCourses };
