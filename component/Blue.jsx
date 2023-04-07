import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blue = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
    }, [])


    return (
        <div className="wrap">
            <section className="blue">
                <div className="blue-text">
                    <h3 data-aos="zoom-in-up">We’ve added a new exciting feature in v2.0.</h3>
                    <h1 data-aos="zoom-in-up">Do you have any question? Feel free to contact us.</h1>
                    <div className="butter" data-aos="zoom-in-up">
                        <button className="black">Contact Us</button>
                        <button className="white">Work With Us</button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Blue