import React from 'react';
import Hero from '../Component/Hero';
import iconD from '../assets/icon-downloads.png'
import iconR from '../assets/icon-ratings.png'


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='Card-container container mx-auto py-12'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl font-bold'>
                        Trending Apps
                    </h1>
                    <p className='text-[#627382]'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                <div>
                    <div className='card bg-[#FFFFFF] border-2 border-amber-600 rounded-lg p-3 w-[300px] shadow-lg'>
                        <img className="w-[285px] h-[285px] rounded-lg" src="" alt="" />
                        <h2 className='font-bold my-3'>Forest: Focus for Productivity</h2>
                        <div className='flex justify-between'>
                            <div className='bg-[#F1F5E8] flex gap-1 py-1 px-3  items-center rounded-sm'>
                                <img className="w-4 " src={iconD} alt="" />
                                <p className='text-[#00D390] font-semibold'>9M</p>
                            </div>
                            <div className='bg-[#FFF0E1] py-1 px-3 rounded-sm flex gap-2 items-center'>
                                <img className="w-4" src={iconR} alt="" />
                                <p className='text-[#FF8811] font-semibold '>5</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Home;