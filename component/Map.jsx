import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Map = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
    }, [])


    return (
        <div className="wrap">
            <section className="map" data-aos="zoom-in-up">
                <iframe className="frame-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58756.6870665276!2d89.78738647910156!3d23.013013899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffe829010a3a6d%3A0x5dad83be70eb59ec!2sSheikh%20Sayera%20Khatun%20Medical%20College!5e0!3m2!1sen!2sbd!4v1680687135564!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>

    )
}

export default Map