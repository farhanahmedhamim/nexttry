import React, { useEffect } from "react";
import Image from "next/image";

import Aos from "aos";
import 'aos/dist/aos.css';

import a from '../public/images/heart.png'
import b from '../public/images/bookmark.png'
import c from '../public/images/support.png'
import d from '../public/images/shopping-bag.png'


import s from '../public/images/services-1.png'
import x from '../public/images/services-9.png'
import z from '../public/images/services-10.png'



const Help = () => {


    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    }, [])

    return (
        <div className="wrap">
            <section className="help">
                <div className="help-top" data-aos="fade-up">
                    <h1>We Help <br /> Clients Make Profit</h1>
                    <p>We help you weather today's uncertainty through our best team.</p>
                </div>
                <div className="help-center" data-aos="fade-up">
                    <div className="single-help">
                        <div className="help-box">
                            <Image src={b} alt="" />
                        </div>
                        <span>Share Knowledge</span>
                    </div>
                    <div className="single-help">
                        <div className="help-box">
                            <Image src={c} alt="" />
                        </div>
                        <span>Share Knowledge</span>
                    </div>
                    <div className="single-help">
                        <div className="help-box">
                            <Image src={a} alt="" />
                        </div>
                        <span>Share Knowledge</span>
                    </div>
                    <div className="single-help">
                        <div className="help-box">
                            <Image src={d} alt="" />
                        </div>
                        <span>Share Knowledge</span>
                    </div>
                </div>
                <div className="help-down">
                    <div className="servic" data-aos="fade-right">
                        <Image src={s} alt="" />
                    </div>
                    <div className="customer" data-aos="fade-up">
                        <h1>Customer Service</h1>
                        <p>The bee's knees cockup loo cracking goal hotpot bits and bobs a load of old tosh bubble and squeak arse over tit twit, excuse my French bevvy Eaton argy-bargy amongst codswallop.x</p>
                        <div className="custom-wrap">
                            <div className="custom-single">
                                <Image src={x} alt="" />
                                <p>Acquisitions Finance Consulting</p>
                            </div>
                            <div className="custom-single">
                                <Image src={z} alt="" />
                                <p>Private Placement Consulting</p>
                            </div>
                        </div>
                        <button className="hope" data-aos="fade-left">Get Started</button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Help