const fastify = require('fastify')({ logger: true });
const { pool } = require('./db');
require('dotenv').config();

const fastifyCors = require('@fastify/cors');
const { checkCoursesTableExists, createCoursesTable } = require('./Tables/Coursetable');
const courseRoutes = require('./Routes/course');

const port = 5000;

fastify.register(fastifyCors, {
    origin: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
});

const start = async () => {
    try {
        const tableExists = await checkCoursesTableExists();
        if (!tableExists) {
            await createCoursesTable();
            console.log('Courses table created');
        }

        await fastify.register(courseRoutes);

        await fastify.listen({ port, host: '0.0.0.0' }); 
        console.log(`Server listening on port ${port}`);
    } 
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
