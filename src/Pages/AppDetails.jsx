import React, { useState } from 'react';
import iconD from '../assets/icon-downloads.png'
import iconR from '../assets/icon-ratings.png'
import iconRe from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { updateList } from '../Utils/localStorage';


const AppDetails = () => {

    const { id } = useParams()
    const { apps, loading } = useApps()

    const [Installed, setInstalled] = useState(false)

    if (loading) return <p>Loading.......</p>

    const app = apps.find(a => a.id === Number(id))


    const { title, image, downloads, ratingAvg, reviews, size, description, ratings } = app

    const handleInstall = () => {
        updateList(app)
        setInstalled(true)


    }

    return (
        <div className='container mx-auto my-12 max-sm:px-5'>
            <div className=''>
                <div className='flex gap-6 items-center border-b-2 border-gray-300 pb-10 max-sm:flex-col '>
                    <img className="w-[350px] h-[350px] rounded-lg max-sm:w-[80%] max-sm:h-[80%] max-sm:mx-auto" src={image} alt="" />
                    <div className='max-sm:text-center'>
                        <div className='border-b-2 border-gray-300 pb-2 mb-3'>
                            <h2 className='font-bold text-3xl'>
                                {title}
                            </h2>

                            <p className='text-[#627382] '>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text py-2'>productive.io</span> </p>
                        </div>

                        <div className='flex gap-6 space-y-4'>
                            <div className='space-y-2'>
                                <img className="w-6 max-sm:mx-auto " src={iconD} alt="" />
                                <p className='text-sm'>Downloads</p>
                                <p className='text-2xl font-bold'>{downloads}</p>
                            </div>
                            <div className='space-y-2'>
                                <img className="w-6 max-sm:mx-auto" src={iconR} alt="" />
                                <p className='text-sm'>Average Ratings</p>
                                <p className='text-2xl font-bold '>{ratingAvg}</p>
                            </div>
                            <div className='space-y-2'>
                                <img className="w-6 max-sm:mx-auto" src={iconRe} alt="" />
                                <p className='text-sm'>Total Reviews</p>
                                <h1 className='font-bold text-2xl '>{reviews}</h1>
                            </div>


                        </div>
                        <div>
                            <button onClick={handleInstall} disabled={Installed} className="btn btn-success text-white">
                                {Installed ? 'Installed' : `Install Now (${size}MB)`}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Chart my-6'>
                    <h1 className='text-2xl font-bold mb-3'>Rating</h1>

                    <ResponsiveContainer width="100%" height={300} >
                        <BarChart data={ratings} layout="vertical">
                            <XAxis type="number" stroke="#ff7400" />
                            <YAxis type="category" dataKey="name" stroke="#ff7400" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#191c40" barSize={30}></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Description</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div >
    );
};

export default AppDetails;