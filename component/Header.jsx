import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import a from '../public/images/icon-5.png'
import b from '../public/images/logo-gradient.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {



    const [scrollPosition, setScrollPosition] = useState(0)
    const [pic, setPic] = useState(false)



    const [toggol, setToggol] = useState(false)
    const toogol = () => {
        setToggol(prev => prev ? false : true)
    }

    const [itemHeight, setItemHeight] = useState(0)
    const [ind, setInd] = useState(null)

    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()
    const refFour = useRef()
    const refFive = useRef()

    const drop = (i) => {
        setInd(prev => prev === i ? null : i)
        if (i === 0) {
            setItemHeight(refOne.current.clientHeight)
        } else if (i === 1) {
            setItemHeight(refTwo.current.clientHeight)
        } else if (i === 2) {
            setItemHeight(refThree.current.clientHeight)
        } else if (i === 3) {
            setItemHeight(refFour.current.clientHeight)
        } else if (i === 4) {
            setItemHeight(refFive.current.clientHeight)
        }
    }






    const [widthe, setWidth] = useState(0)


    useEffect(() => {
        AOS.init({ duration: 2000, once: true })


        window.addEventListener("scroll", () => {
            setScrollPosition(window.scrollY)
            if (window.scrollY <= 99) {
                setPic(false)
            } else {
                setPic(true)
            }
        })

        setWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        const footerList = document.querySelectorAll(".ofen")
        footerList.forEach(item => {
            item.addEventListener("mouseover", () => {
                footerList.forEach(inner => {
                    inner.classList.remove("leave")
                })
                item.classList.add("enter")
            })
            item.addEventListener("mouseout", () => {
                item.classList.remove("enter")
                item.classList.add("leave")
            })
        })


    }, [])



    return (
        <header className={scrollPosition > 299 && "active"} style={{ top: scrollPosition > 299 ? "0" : scrollPosition < 200 ? "0" : "-100px" }}>
            <div className="overlay" onClick={toogol} style={{ opacity: toggol ? "1" : "0", pointerEvents: toggol ? "all" : "none", right: toggol ? "0px" : "100%" }}></div>
            <div className="header-left" data-aos="fade-right">
                <Image src={a} alt="" className="aaaa" style={{ display: pic ? "none" : "block" }} />
                <Image src={b} alt="" className="bbbb" />
            </div>
            <div className="header-right">
                <nav>
                    <ul className="container" style={{ left: toggol ? "0px" : "-250px" }}>
                        <li className="common" onClick={e => widthe < 1100 && drop(0)} style={{ height: ind === 0 ? `${itemHeight + 80}px` : widthe < 1100 ? "42.5px" : "unset" }}>Home <i className="fa-solid fa-chevron-down"></i>
                            <ul className="hard" ref={refOne}>
                                <li className="ofen">Main demo</li>
                                <li className="ofen">Main Service</li>
                                <li className="ofen">About</li>
                                <li className="ofen">Demo</li>
                                <li className="ofen">Main demo</li>
                            </ul>
                        </li>
                        <li className={"common"}>About</li>
                        <li className={"common"} onClick={e => widthe < 1100 && drop(1)} style={{ height: ind === 1 ? `${itemHeight + 80}px` : widthe < 1100 ? "42.5px" : "unset" }}>Service <i className="fa-solid fa-chevron-down"></i>
                            <ul className="hard" ref={refTwo}>
                                <li className="ofen">Services Details</li>
                                <li className="ofen">Service</li>
                            </ul>
                        </li>
                        <li className={"common"} onClick={e => widthe < 1100 && drop(2)} style={{ height: ind === 2 ? `${itemHeight + 80}px` : widthe < 1100 ? "42.5px" : "unset" }}>Pages <i className="fa-solid fa-chevron-down"></i>
                            <ul className="hard" ref={refThree}>
                                <li className="ofen">Portfolio 02</li>
                                <li className="ofen">Portfolio</li>
                                <li className="ofen">port</li>
                            </ul>
                        </li>
                        <li className={"common"} onClick={e => widthe < 1100 && drop(3)} style={{ height: ind === 3 ? `${itemHeight + 80}px` : widthe < 1100 ? "42.5px" : "unset" }}>Shop <i className="fa-solid fa-chevron-down"></i>
                            <ul className="hard" ref={refFour}>
                                <li className="ofen">Shop</li>
                                <li className="ofen">Shop Details</li>
                            </ul>
                        </li>
                        <li className={"common"} onClick={e => widthe < 1100 && drop(4)} style={{ height: ind === 4 ? `${itemHeight + 80}px` : widthe < 1100 ? "42.5px" : "unset" }}>Blog <i className="fa-solid fa-chevron-down"></i>
                            <ul className="hard" ref={refFive}>
                                <li className="ofen">Blog Sidebar</li>
                                <li className="ofen">Blog Details</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <button>Get A Quote</button>
                <i className="fa-solid fa-bars" onClick={toogol}></i>
            </div>
        </header>
    )
}

export default Header