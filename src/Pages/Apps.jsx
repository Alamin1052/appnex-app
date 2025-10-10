import React, { useState } from 'react';
import Card from '../Component/Card';
import useApps from '../Hooks/useApps';
import NotFound from '../Component/NotFound';
import Loading from '../Component/Loading';

const Apps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState('')
    const [searchLoading, setSearchLoading] = useState()
    const term = search.trim().toLocaleLowerCase()

    const searchApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps

    const handleSearch = (e) => {
        const value = e.target.value
        setSearch(value)
        setSearchLoading(true)

        setTimeout(() => {
            setSearchLoading(false)
        }, 500)

    }


    return (
        <div className='container mx-auto my-12'>
            <div className='text-center mb-10 max-sm:p-6 max-sm:mb-0'>
                <h1 className='text-[#001931] text-3xl font-bold'>
                    Our All Applications
                </h1>
                <p className='text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div>
                <div className='flex justify-between gap-3 items-center mb-4 max-sm:p-6 max-sm:flex-col-reverse'>
                    <h2 className='font-bold text-xl'>
                        ({searchApps.length})Apps Found
                    </h2>
                    <label className="input max-sm:w-[90%] border-1 border-amber-300 ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={search}
                            onChange={handleSearch}
                            type="search"
                            required placeholder="Search" />
                    </label>
                </div>
            </div>
            {loading ? (
                <Loading />
            ) : searchLoading ? (
                <div className='col-span-4 flex justify-center items-center py-10'>
                    <p className='text-3xl text-blue-600 font-semibold animate-pulse [animation-duration:0.5s]'>
                        Searching...
                    </p>
                </div>
            ) : (
                <div className=' grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:px-10 max-sm:text-center items-stretch'>
                    {searchApps.length > 0 ? (
                        searchApps.map(app => <Card key={app.id} app={app} />)
                    ) : (
                        <div className='col-span-4 flex flex-col items-center justify-center py-10'>
                            <NotFound />
                        </div>
                    )}
                </div>
            )}

        </div >
    );
};

export default Apps;