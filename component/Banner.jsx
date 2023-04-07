import React, { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

import c from '../public/images/slider-1.png'
import d from '../public/images/slider-2-2.jpg'
import e from '../public/images/slider-3-1.jpg'
import f from '../public/images/slider-4.jpg'

import g from '../public/images/icon-1.png'
import h from '../public/images/icon-3.png'
import i from '../public/images/icon-4.png'
import j from '../public/images/icon-6.png'
import k from '../public/images/icon-7.png'

const Banner = () => {


    useEffect(() => {
        AOS.init({ duration: 2000, once: true })
    }, [])



    return (
        <div className="wrap">
            <section className="banner">
                <Image src={g} alt="" className="gggg" />
                <Image src={h} alt="" className="hhhh" />
                <Image src={i} alt="" className="iiii" />
                <Image src={j} alt="" className="jjjj" />
                <Image src={k} alt="" className="kkkk" />
                <div className="banner-left" data-aos="fade-right">
                    <span>Welcome To Zibber.</span>
                    <h1>Get more Impact Fasted</h1>
                    <p>Tinkety tonk old fruit baking cakes cobblers happy days argy-bargy up the duff excuse my french fanny around.</p>
                    <button>See What's New</button>
                </div>
                <div className="banner-right">
                    <Image src={c} alt="" className="cccc" data-aos="zoom-in-up" />
                    <Image src={d} alt="" className="dddd" data-aos="zoom-in-up" />
                    <Image src={e} alt="" className="eeee" data-aos="zoom-in-up" />
                    <Image src={f} alt="" className="ffff" data-aos="zoom-in-up" />
                </div>
            </section>
        </div>

    )
}

export default Banner