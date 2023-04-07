import React, { useEffect } from "react";
import Image from "next/image";
import a from '../public/images/logo-gradient.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

    useEffect(() => {

        AOS.init({ duration: 2000, once: true })


        const footerList = document.querySelectorAll(".list-two li")
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
        <div className="wrap">
            <footer>
                <div className="footer-top" data-aos="fade-up">
                    <div className="single-footer">
                        <Image src={a} alt="" className="ffootimg" />
                        <p>Copyright © 2023 All Rights <br /> Reserved passion by BasicTheme</p>
                        <nav>
                            <ul className="spfeic">
                                <li>
                                    <i className="fa-brands fa-facebook-f social"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-twitter social"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-vimeo-v social"></i>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="single-footer">
                        <h2>Company</h2>
                        <nav>
                            <ul className="list-two">
                                <li>About Us</li>
                                <li>Testimonials</li>
                                <li>Consulting</li>
                                <li>Contact Us</li>
                                <li>Team</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="single-footer">
                        <h2>Resources</h2>
                        <nav>
                            <ul className="list-two">
                                <li>Customers</li>
                                <li>Pricing</li>
                                <li>News</li>
                                <li>Learning Center</li>
                                <li>Help desk</li>
                                <li>Support</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="single-footer">
                        <h2>Newsletter</h2>
                        <p>Subscribe to out newsletter today to receive updates on the latest news</p>
                        <form className="forms">
                            <input type="text" placeholder="Email Address" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2023 All Rights Reserved passion by <span>Hamim_Farhan</span></p>
                </div>
            </footer>
        </div>

    )
}

export default Footer