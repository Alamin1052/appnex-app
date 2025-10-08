import React from 'react';
import InstallationCard from '../Component/InstallationCard';

const Installation = () => {
    return (
        <div className='container mx-auto py-12 max-sm:px-5'>
            <div className='text-center mb-10'>
                <h1 className='text-[#001931] text-3xl font-bold'>
                    Your Installed Apps
                </h1>
                <p className='text-[#627382]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className=''>
                <div className='flex justify-between items-center mb-3'>
                    <h2 className='font-bold'>1 Apps Found</h2>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">Sort by Size  ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>none</a></li>
                            <li><a>low-high</a></li>
                            <li><a>high-low</a></li>
                        </ul>
                    </div>
                </div>
                <InstallationCard></InstallationCard>
            </div>
        </div>
    );
};

export default Installation;