import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';


import a from '../public/images/services-1.png'
import b from '../public/images/services-2.png'
import c from '../public/images/services-3.png'
import d from '../public/images/services-5.png'
import p from '../public/images/about-2.png'
import o from '../public/images/done.png'



const Package = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    }, [])


    return (
        <div className="wrap">
            <section className="package">
                <div className="package-top" data-aos="fade-up">
                    <div className="single-package">
                        <Image src={a} alt="" className="first" />
                        <h2>Share Knowledge</h2>
                        <p>Data Tracking</p>
                    </div>
                    <div className="single-package">
                        <Image src={c} alt="" className="first" />
                        <h2>Meet New Friends</h2>
                        <p>User Experience</p>
                    </div>
                    <div className="single-package">
                        <Image src={b} alt="" className="first" />
                        <h2>Customer Service</h2>
                        <p>App Design</p>
                    </div>
                    <div className="single-package">
                        <Image src={d} alt="" className="first" />
                        <h2>Strategic adviced</h2>
                        <p>Press Releases</p>
                    </div>
                </div>
                <div className="package-bottom">
                    <div className="package-image" data-aos="fade-right">
                        <Image src={p} alt="" />
                    </div>
                    <div className="package-text">
                        <h1 data-aos="fade-down">Startup & Early Consulting Business Package</h1>
                        <p data-aos="fade-left">We help you weather today's uncertainty through our best team intelligence and needs.</p>
                        <div className="package-wrap" data-aos="fade-left">
                            <div className="pagkages-single">
                                <div className="pack">
                                    <Image src={o} alt="" />
                                </div>
                                <span className="spa">Innovative ideas</span>
                            </div>
                            <div className="pagkages-single">
                                <div className="pack">
                                    <Image src={o} alt="" />
                                </div>
                                <span className="spa">Professional assistance</span>
                            </div>
                            <div className="pagkages-single">
                                <div className="pack">
                                    <Image src={o} alt="" />
                                </div>
                                <span className="spa">Financial advisory</span>
                            </div>
                        </div>
                        <button data-aos="fade-up">What We Do </button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Package