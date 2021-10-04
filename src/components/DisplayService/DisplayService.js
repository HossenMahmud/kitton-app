import React from 'react';
import './DisplayService.css';

const DisplayService = (props) => {
    const { className, img, courseFee, instructor } = props.service;
    return (
        <div className='col-lg-4'>
            <div className='h-100 p-4  course-item'>
                <div className="course-img">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className="course-details">
                    <h4 className='mt-4'>{className}</h4>
                    <p><span>${courseFee}</span> Per Month</p>
                    <p>Instructor: <small className='fw-bold'>{instructor}</small></p>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;