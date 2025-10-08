import React from 'react';
import iconD from '../assets/icon-downloads.png'
import iconR from '../assets/icon-ratings.png'

const InstallationCard = () => {
    return (
        <div>
            <div className='flex justify-between gap-3 items-center bg-[#FFFFFF] rounded-lg p-3 w-full shadow-lg'>
                <div className='flex gap-4 items-center'>
                    <img className="w-[85px] h-[85px] rounded-lg" src="" alt="" />
                    <div>
                        <h2 className='font-bold my-3'>Forest: Focus for Productivity</h2>
                        <div className='flex gap-6'>
                            <div className=' flex gap-1 items-center rounded-sm'>
                                <img className="w-4 " src={iconD} alt="" />
                                <p className='text-[#00D390] font-semibold'>9M</p>
                            </div>
                            <div className='rounded-sm flex gap-2 items-center'>
                                <img className="w-4" src={iconR} alt="" />
                                <p className='text-[#FF8811] font-semibold '>5</p>
                            </div>
                            <p className='text-[#627382]'>258 MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success text-white">Uninstall</button>
                </div>
            </div>
        </div >
    );
};

export default InstallationCard;