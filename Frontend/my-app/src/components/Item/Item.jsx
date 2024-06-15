import React, { useState, useEffect } from "react";
import './Item.css';
import Card from "./Card";

const Item = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCourses = async () => {
            try {

                const response = await fetch("http://localhost:5000/courses", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const result = await response.json();
                setCourses(result);

            } catch (error) {
                console.log("Error Fetching Data in frontend", error);
            }
        }

        loadCourses();
    }, []);

    return (
        <div className="courses"> 
            {courses.map((course) => (
                <Card key={course.id} course={course}/>
            ))}
        </div>
    );
}

export default Item;
