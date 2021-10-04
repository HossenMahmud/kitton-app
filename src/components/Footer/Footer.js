import React from 'react';
import './Footer.css';
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'

const Footer = () => {
    return (
        <>
            <div className='footer-image p-5'>
                <div className="container p-4">
                    <div className="row mb-5">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-4 mb-5 footer-item">
                                    <h4>About kitton</h4>
                                    <p>Assertively develop team driven niche marketis and revolutionary servicesre Synergistically parallel task ntrinsicly reintermediate best credibly.</p>
                                    <p>+8801786502485,014568</p>
                                    <p>Mohammadpur,Kaderabad,Dhaka-1207</p>
                                    <p>www.web.programming-hero.com</p>
                                </div>
                                <div className="col-lg-4  mb-5 footer-item">
                                    <h4>Recent Blog Post</h4>
                                    <div className="row mb-4">
                                        <div className="col-lg-4">
                                            <img src={blog1} alt="" />
                                        </div>
                                        <div className="col-lg-8">
                                            <p>Why do aerobicay fit children have better?
                                            </p>
                                            <small>September 15,2021</small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={blog2} alt="" />
                                        </div>
                                        <div className="col-lg-8">
                                            <p>How Kids make sense of Life Experiences</p>
                                            <small>March 08,2021</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  mb-5 footer-item">
                                    <h4>Sign up for open day</h4>
                                    <p>Enter your email and get latest updates and offers subscribe us</p>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"></input>
                                    <button className='btn-regular mt-3'>SUBSCRIBE NOW!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>© 2021 All Rights Reserved. Designed by Hossen Mahmud</p>
            </div>
        </>
    );
};

export default Footer;