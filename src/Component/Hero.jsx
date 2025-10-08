import React from 'react';
import { FaAppStore, FaGooglePay, FaGooglePlay } from 'react-icons/fa';
import hero from '../assets/hero.png'

const Hero = () => {
    return (
        <div>
            <div className='bg-[#FFFFFF50] pt-10'>
                <div className='text-center space-y-3'>
                    <h1 className='text-4xl font-bold '>
                        We Build <br />
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive </span> Apps
                    </h1>
                    <p className='text-[#627382] max-w-4xl mx-auto text-center max-sm:p-4 '>
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <button className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><a href="https://play.google.com/store/games?device=windows"> <FaGooglePlay className='inline-block items-center mr-1.5'></FaGooglePlay> Google Play</a></button>
                        <button className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><a href="https://www.apple.com/app-store/"><FaAppStore className='inline-block mr-1.5'></FaAppStore> App store</a></button>
                    </div>
                </div>
                <div className='flex justify-center mt-5 mx-auto max-sm:w-3/4 md:w-3/4'>
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className='trust-box bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-10'>
                <h1 className='text-2xl font-bold'>
                    Trusted by Millions, Built for You
                </h1>
                <div className='flex justify-around container mx-auto mt-4 max-sm:p-4 max-md:p-4'>
                    <div>
                        <p className='text-[12px] font-light'>
                            Total Downloads
                        </p>
                        <h1 className='text-3xl font-bold'>29.6M</h1>
                        <p className='text-[12px] font-light'>
                            21% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[12px] font-light'>
                            Total Reviews
                        </p>
                        <h1 className='text-3xl font-bold'>906K</h1>
                        <p className='text-[12px] font-light'>
                            46% more than last month
                        </p>
                    </div>
                    <div>
                        <p className='text-[12px] font-light'>
                            Active Apps
                        </p>
                        <h1 className='text-3xl font-bold'>132+</h1>
                        <p className='text-[12px] font-light'>
                            31 more will Launch
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;