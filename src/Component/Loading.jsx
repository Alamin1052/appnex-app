import React from 'react';
import logo from '../assets/logo.png'

const Loading = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold flex justify-center items-center h-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-transparent bg-clip-text animate-pulse [animation duration:0.2s] '>
                Appn<span className='animate-spin'><img className='w-[64px] h-[64px]' src={logo} alt="" /></span>x
            </h1>
        </div>
    );
};

export default Loading;