import React from 'react';
import Hero from '../Component/Hero';
import Card from '../Component/Card';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import Loading from '../Component/Loading';


const Home = () => {

    const { apps, loading } = useApps()
    const trendingApps = apps.slice(0, 8)

    return (
        <div className='bg-[#fbf7f5] '>
            <Hero></Hero>
            <div className='Card-container container mx-auto py-12'>
                <div className='text-center mb-10'>
                    <h1 className='text-[#001931] text-3xl font-bold'>
                        Trending Apps
                    </h1>
                    <p className='text-[#627382]'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                {
                    loading ? <Loading></Loading> : <div className='grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:p-10 '>

                        {trendingApps.map(app => (<Card app={app} />))}
                    </div>
                }

                <div className='flex justify-center text-center mt-8 '>
                    <Link to='/apps' className='text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</Link>
                </div>
            </div>
        </div >

    );
};

export default Home;