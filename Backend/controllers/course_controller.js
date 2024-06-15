const { createCourses, getCourses } = require('../models/Courses');

async function createCourse(req,res) {

    console.log(req.body);
    try {
        const id = await createCourses(req.body);
        console.log("came here controller 1");
        res.status(201).send({ id });
    } 
    catch (error) {
        console.log("came here controller");
        res.status(500).send({ error: 'Error creating course', error });
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await getCourses();
        res.send(courses);
    } 
    catch (error) {
        res.status(500).send({ messages: 'Error retrieving courses' });
    }
}

module.exports = { createCourse, getAllCourses };
