import React from 'react';
import aboutImg from '../../images/about02.png';
import './About.css';
import icon1 from '../../images/icon01.png';
import icon2 from '../../images/icon02.png';
import icon3 from '../../images/icon03.png';
import icon4 from '../../images/icon04.png';
import counter1 from '../../images/counter1.png';
import counter2 from '../../images/counter2.png';
import counter3 from '../../images/counter3.png';

const About = () => {
    return (
        <div className='about-bg p-md-5'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img className='img-fluid' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h3>About Our Kittons</h3>
                            <h1>A Friendly School Having Proud Of Their Students</h1>
                            <p>Dolor ame consectetur elite eusmod tempor dunt aliqua utas enim veniam tempore quis ipsum nostrud ipsume amet consectetur adpisicing elit sedo eiusmod tempo incdidunt labore dolore magna aliquat enim minim veniam nostrud abori nisut alquip exea commodo consequat duis aute irure aliqua enim minim veniam quis nostrud ullamco laboris nisiut aliquip</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className='d-flex'>
                                    <div className="icon">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <h5 className='ms-3 mb-4'>Learning Environment</h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex'>
                                    <div className="icon">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <h5 className='ms-3 mb-4'>Professional Teachers</h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex'>
                                    <div className="icon">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <h5 className='ms-3'>Programs For Everyone</h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='d-flex'>
                                    <div className="icon">
                                        <img src={icon4} alt="" />
                                    </div>
                                    <h5 className='ms-3'>Professional Teaching</h5>
                                </div>
                            </div>
                        </div>
                        {/* <button className='btn-regular '>Read More</button> */}
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 mb-sm-2">
                        <div className="counter-item count1">
                            <div className="counter-img">
                                <img src={counter1} alt="" />
                            </div>
                            <h1>530</h1>
                            <p>Students Enrolled</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-sm-2">
                        <div className="counter-item count2">
                            <div className="counter-img">
                                <img src={counter2} alt="" />
                            </div>
                            <h1>20+</h1>
                            <p>Certified Trainer</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="counter-item count3">
                            <div className="counter-img">
                                <img src={counter3} alt="" />
                            </div>
                            <h1>100%</h1>
                            <p>Yearly Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;