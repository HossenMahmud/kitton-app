import React from 'react';
import './DisplayTeacher.css';

const DisplayTeacher = (props) => {
    const { name, img, des, sub } = props.teacher;
    return (
        <div className='col-lg-6'>
            <div className='d-flex teacher-item h-100'>
                <div className="teacher-img">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='teacher-info'>
                    <h4>{name}</h4>
                    <p>{sub} Teacher</p>
                    <p>{des}</p>
                    <button className='teacher-btn'>More Details..</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayTeacher;