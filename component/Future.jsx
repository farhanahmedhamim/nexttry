import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from 'aos';
import 'aos/dist/aos.css';


import a from '../public/images/project-1.png'
import b from '../public/images/project-2.png'




const Future = () => {

    const [arry, setArry] = useState([])
    const [slide, setSlide] = useState(0)

    const hamim = () => {
        setSlide(window.innerWidth)
    }

    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
        setArry([
            {
                img: a,
                nub: "01"
            },
            {
                img: b,
                nub: "02"
            },
            {
                img: a,
                nub: "03"
            },
            {
                img: b,
                nub: "04"
            }
        ])
        hamim()
        window.addEventListener("resize", hamim)
    }, [])


    return (
        <div className="wrap">
            <section className="future">
                <div className="future-top" data-aos="fade-right">
                    <h1>Future is brighter when you're <br /> more prepared</h1>
                    <p>We help you whether today's uncertainty through our best team <br /> intelligence and needs.</p>
                </div>
                <div className="future-down" data-aos="fade-up">

                    <Swiper className="mySwiper"
                        pagination={{ clickable: true }}
                        slidesPerView={slide > 900 ? 2 : 1}
                        spaceBetween={30}
                        loop={true}
                    >
                        {
                            arry.map((val, ind) => {
                                return <SwiperSlide key={ind}><Card val={val} /></SwiperSlide>
                            })
                        }
                    </Swiper>


                </div>
            </section>
        </div>

    )
}

export default Future