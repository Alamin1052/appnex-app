import React from 'react';
import Error from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center h-screen items-center text-center max-sm:p-5'>
            <div className='max-w-[70%] flex justify-center'>
                <img className='' src={Error} alt="" />
            </div>
            <h1 className='text-3xl font-bold'>
                Oops, page not found!
            </h1>
            <p className='text-[#627382] my-3'>
                The page you are looking for is not available.
            </p>
            <button onClick={() => window.history.back()} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
        </div >
    );
};

export default ErrorPage;