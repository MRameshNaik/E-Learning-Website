const fastify = require('fastify')({ logger: true });
const { pool } = require('./db');

require('dotenv').config();

// Tables here
const { checkCoursesTableExists,createCoursesTable } = require('./Tables/Coursetable');

// Routes here
const courseRoutes = require('./Routes/course');

const port = 6000;

const start = async() => {

    try{
        const tableExists = await checkCoursesTableExists();
        if (!tableExists) {
            await createCoursesTable();
            console.log('Courses table created');
        }
        
        await fastify.register(courseRoutes);
        
        await fastify.listen(port);
        console.log(`Server listening on port ${port}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();