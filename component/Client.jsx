import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import a from '../public/images/quote-1.png'
import b from '../public/images/testimonial-1.png'
import c from '../public/images/border.png'




const Client = () => {

    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
    }, [])


    return (
        <div className="wrap">
            <section className="client">
                <div className="client-left">
                    <h3 data-aos="fade-right">Testimonials</h3>
                    <h1 data-aos="fade-right">Featured Client <br /> Success Story</h1>
                    <div className="client-crowsel" data-aos="fade-right">
                        <Swiper
                            pagination={{
                                dynamicBullets: true
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="slider">
                                    <h5>He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</h5>
                                    <div className="ceo">
                                        <Image src={a} alt="" />
                                        <div className="names">
                                            <h4>John Deo</h4>
                                            <span>Founder and CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider">
                                    <h5>He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</h5>
                                    <div className="ceo">
                                        <Image src={a} alt="" />
                                        <div className="names">
                                            <h4>John Deo</h4>
                                            <span>Founder and CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider">
                                    <h5>He nicked it fantastic well on your bike mate have it a I bum bag I twit easy peasy that, chimney pot amongst are you taking the piss daft show off show off pick.</h5>
                                    <div className="ceo">
                                        <Image src={a} alt="" />
                                        <div className="names">
                                            <h4>John Deo</h4>
                                            <span>Founder and CEO</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="client-right">
                    <div className="single-circle" data-aos="fade-left">
                        <Image src={b} alt="" />
                    </div>
                    <div className="single-picture" data-aos="fade-right">
                        <Image src={c} alt="" />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Client