import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import DisplayService from '../DisplayService/DisplayService';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div>
                <Banner></Banner>
            </div>
            <div className='homeService-bg'>
                <div className='container py-5'>
                    <div className='service-title mb-4'>
                        <h1>Most Popular School Classes</h1>
                    </div>
                    <div className='row g-4'>
                        {
                            services.slice(3).map(service => <DisplayService
                                key={service.id}
                                service={service}
                            ></DisplayService>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;