import React from 'react';
import iconD from '../assets/icon-downloads.png'
import iconR from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const Card = ({ app }) => {
    const { title, image, downloads, ratingAvg, id } = app
    return (
        <div>
            <Link to={`/apps/${id}`}>
                <div className='card bg-[#FFFFFF]  rounded-lg p-3 shadow-lg'>
                    <img className="w-[285px] h-[285px] rounded-lg mx-auto inline-block" src={image} alt="" />
                    <h2 className='font-bold text-xl my-3'>{title}</h2>
                    <div className='flex justify-between'>
                        <div className='bg-[#F1F5E8] flex gap-1 py-1 px-3  items-center rounded-sm'>
                            <img className="w-4 " src={iconD} alt="" />
                            <p className='text-[#00D390] font-semibold'>{downloads}</p>
                        </div>
                        <div className='bg-[#FFF0E1] py-1 px-3 rounded-sm flex gap-2 items-center'>
                            <img className="w-4" src={iconR} alt="" />
                            <p className='text-[#FF8811] font-semibold '>{ratingAvg}</p>
                        </div>
                    </div>
                </div>

            </Link>
        </div >
    );
};

export default Card;