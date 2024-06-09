const courseController = require('../controllers/course_controller');

async function courseRoutes(fastify, options) {
    fastify.post('/courses', courseController.createCourse);
    fastify.get('/courses', courseController.getAllCourses);
}

module.exports = courseRoutes;
