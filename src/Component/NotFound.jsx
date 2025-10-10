import React from 'react';
import ErrorApp from '../assets/App-Error.png'

const NotFound = () => {
    return (

        <div className='flex flex-col justify-center h-screen items-center text-center max-sm:p-5'>
            <img src={ErrorApp} alt="" />
            <h1 className='text-3xl font-bold'>
                Oops, page not found!
            </h1>
            <p className='text-[#627382] my-3'>
                The page you are looking for is not available.
            </p>
            <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
        </div>

    );
};

export default NotFound;