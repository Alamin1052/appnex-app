import React from 'react';
import iconD from '../assets/icon-downloads.png'
import iconR from '../assets/icon-ratings.png'
import iconRe from '../assets/icon-review.png'

const AppDetails = () => {
    return (
        <div className='container mx-auto my-12 max-sm:px-5'>
            <div className=''>
                <div className='flex gap-6 items-center border-b-2 border-gray-300 pb-10 max-sm:flex-col '>
                    <img className="w-[350px] h-[350px] rounded-lg" src="" alt="" />
                    <div>
                        <div className='border-b-2 border-gray-300 pb-2 mb-3'>
                            <h2 className='font-bold text-3xl'>Forest: Focus for Productivity</h2>

                            <p className='text-[#627382] '>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text py-2'>productive.io</span> </p>
                        </div>

                        <div className='flex gap-6 space-y-4'>
                            <div className='space-y-2'>
                                <img className="w-6" src={iconD} alt="" />
                                <p className='text-sm'>Downloads</p>
                                <p className='text-2xl font-bold'>9M</p>
                            </div>
                            <div className='space-y-2'>
                                <img className="w-6" src={iconR} alt="" />
                                <p className='text-sm'>Average Ratings</p>
                                <p className='text-2xl font-bold '>4.9</p>
                            </div>
                            <div className='space-y-2'>
                                <img className="w-6" src={iconRe} alt="" />
                                <p className='text-sm'>Total Reviews</p>
                                <h1 className='font-bold text-2xl '>64K</h1>
                            </div>


                        </div>
                        <div>
                            <button className="btn btn-success text-white">Install Now (291 MB)</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default AppDetails;