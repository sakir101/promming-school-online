import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
let length = 0;
const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    length = courses.length;
    return (
        <div>
            <h3 className='my-4 text-primary text-decoration-underline'>My courses: {courses.length}</h3>

            <div className="container my-4">
                <div className="row g-4">
                    {
                        courses.map(course => <Course key={course.id} course={course} length={length}></Course>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyCourses;