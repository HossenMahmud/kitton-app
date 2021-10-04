import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound-bg'>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="notFount-content">
                        <h1><span className='fist4'>4</span><span className='zero'>0</span><span className='secend4'>4</span></h1>
                        <h2>Oops! this page not found</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;