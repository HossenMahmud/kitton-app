import React, { useEffect, useState } from 'react';
import DisplayService from '../DisplayService/DisplayService';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-body'>
            <div className="container py-5">
                <div className='service-title mb-4'>
                    <h3>Our School Classes</h3>
                    <h1>Most Popular School Classes</h1>
                </div>
                <div className="row g-4">
                    {
                        services.map(service => <DisplayService
                            key={service.id}
                            service={service}
                        ></DisplayService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;