import React from 'react';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
        <div className='bg-[#001931] '>
            <footer className="footer sm:footer-horizontal  text-base-content py-10 text-white container mx-auto max-sm:p-8 ">
                <aside className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:mx-auto'>
                    <img className="w-10 flex justify-center text-center mx-auto" src={logo} alt="" />
                    <p className=''>
                        <span className='text-xl font-bold inline-block bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text'>
                            Appnex</span> Technology Ltd.
                        <br />
                        Providing reliable tech since 2025
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">App Development</a>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">CSM Solution</a>
                    <a className="link link-hover">LLM Solution</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div >
    );
};

export default Footer;