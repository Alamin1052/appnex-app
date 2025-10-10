import React from 'react';
import ErrorApp from '../assets/App-Error.png'

const NotFound = () => {
    return (

        <div className='flex flex-col justify-center h-screen items-center text-center max-sm:p-5'>
            <div className='max-w-[70%] flex justify-center mb-3'>
                <img className='' src={ErrorApp} alt="" />
            </div>
            <h1 className='text-3xl font-bold'>
                OPPS!! APP NOT FOUND
            </h1>
            <p className='text-[#627382] my-3'>
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <button onClick={() => window.history.back()} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button>
        </div>

    );
};

export default NotFound;