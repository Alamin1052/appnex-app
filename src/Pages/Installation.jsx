import React, { useState } from 'react';
import { loadInstallation, removeFromInstallation } from '../Utils/localStorage';
import iconR from '../assets/icon-ratings.png'
import iconD from '../assets/icon-downloads.png'

const Installation = () => {

    const [installation, setInstallation] = useState(() => loadInstallation())
    const [sortOrder, setSortOrder] = useState('none')

    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...installation].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'price-desc') {
            return [...installation].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installation
        }
    })()

    const handleRemove = (id) => {
        removeFromInstallation(id)
        setInstallation(prev => prev.filter(a => a.id !== id))
        alert('Uninstall successfull')
    }


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
                    <h2 className='font-bold'>({sortedItem.length}) Apps Found</h2>
                    <label className='form-control w-full max-w-xs'>
                        <select
                            className='select select-bordered'
                            value={sortOrder}
                            onChange={e => setSortOrder(e.target.value)}
                        >
                            <option value='none'>Sort by Download</option>
                            <option value='price-asc'>Low-&gt;High</option>
                            <option value='price-desc'>High-&gt;Low</option>
                        </select>
                    </label>
                </div>
                {
                    sortedItem.map(a => (
                        <div className='flex justify-between gap-3 items-center bg-[#FFFFFF] rounded-lg p-3 w-full shadow-lg mb-3'>
                            <div className='flex gap-4 items-center'>
                                <img className="w-[85px] h-[85px] rounded-lg" src={a.image} alt="" />
                                <div>
                                    <h2 className='font-bold my-3'>{a.title}</h2>
                                    <div className='flex gap-6'>
                                        <div className=' flex gap-1 items-center rounded-sm'>
                                            <img className="w-4 " src={iconD} alt="" />
                                            <p className='text-[#00D390] font-semibold'>{a.downloads}</p>
                                        </div>
                                        <div className='rounded-sm flex gap-2 items-center'>
                                            <img className="w-4" src={iconR} alt="" />
                                            <p className='text-[#FF8811] font-semibold '>{a.ratingAvg}</p>
                                        </div>
                                        <p className='text-[#627382]'>{a.size} MB</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleRemove(a.id)} className="btn btn-success text-white">Uninstall</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Installation;