import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection';

import "../styles/tours.css";
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';
// import tourData from '../assets/data/tours';
import { Container, Row, Col } from 'reactstrap';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';


function About() {
    return (
        <>
            <CommonSection title={"About"} />
            <section className="pt-0">
                <Container>
                    <Container>
                        <Row>
                            <Col lg='8'>
                                <div className="hero__content">

                                    <h1>Welcome to <span
                                        className="highlight">Four Brothers Trek!!!</span></h1>
                                    <p>
                                        There are lots of things to do in Nepal and trekking is one of the most exciting! Since there are many companies to choose from, why not choose the best? Four Brothers Trek offers some of the best trekking packages in the Everest, Annapurna, Langtang, and Manaslu regions. We offer treks for every age, ability, and experience. We also offer peak climbing, private sightseeing tours, adventure tours, rafting, and packages that include a combination of these. We are committed to preserving Nepal’s incomparable natural environment as well as supporting the local communities we visit. Come to Nepal to enjoy its natural beauty, rich heritage, and adventures!
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className="about_side">

                                    <h2>Why Four Brothers?</h2>
                                    <ul>

                                        <li><i className="ri-check-fill check-icon"></i>Long experienced</li>
                                        <li><i className="ri-check-fill check-icon"></i>Most reliable and trusted trekking company</li>
                                        <li><i className="ri-check-fill check-icon"></i>Offering a personalized experience</li>
                                        <li><i className="ri-check-fill check-icon"></i>Guaranteed departures</li>
                                        <li><i className="ri-check-fill check-icon"></i>Fully licensed and takes care of your security</li>
                                        <li><i className="ri-check-fill check-icon"></i>Team of destinations experts</li>
                                        <li><i className="ri-check-fill check-icon"></i>Reasonable prices & quality service</li>

                                    </ul>
                                </div>
                            </Col>
                            {/* <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt='' />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt='' controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt='' />
          </div>
        </Col> */}
                        </Row>
                    </Container>
                </Container>
            </section>
        </>
    )
}

export default About;