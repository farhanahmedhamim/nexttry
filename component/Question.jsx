import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Accordion from 'react-bootstrap/Accordion';


const Question = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
    }, [])

    return (
        <div className="wrap">
            <section className="question">
                <div className="question-left" data-aos="fade-up">
                    <h1>Do you have Any <br /> question</h1>
                    <p>We help you weather today's uncertainty through <br /> our best team.</p>
                    <button>All Question</button>
                </div>
                <div className="question-right" data-aos="fade-up">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can you help my busniess grow ?</Accordion.Header>
                            <Accordion.Body>
                                <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What are your best interest rates?</Accordion.Header>
                            <Accordion.Body>
                                <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How do you calculate cost of services?</Accordion.Header>
                            <Accordion.Body>
                                <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How do you calculate cost of services?</Accordion.Header>
                            <Accordion.Body>
                                <p>He nicked it show off show pick your nose and blow off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off blower burke james bond cheeky.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section >
        </div>
    )
}

export default Question