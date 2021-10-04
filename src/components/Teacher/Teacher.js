import React, { useEffect, useState } from 'react';
import DisplayTeacher from '../DisplayTeacher/DisplayTeacher';
import './Teacher.css';

const Teacher = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('/teacherFakeData.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='teacher-bg py-5'>
            <div className='container'>
                <div className="teacher-title mb-5">
                    <h3>Meet Our Stuffy</h3>
                    <h1>Our Best Popular Teachers</h1>
                </div>
                <div className="row g-4">
                    {
                        teachers.map(teacher => <DisplayTeacher
                            key={teacher.id}
                            teacher={teacher}
                        ></DisplayTeacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teacher;