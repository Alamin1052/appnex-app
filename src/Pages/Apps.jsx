import React, { useState } from 'react';
import Card from '../Component/Card';
import useApps from '../Hooks/useApps';

const Apps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()

    const searchApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps

    return (
        <div className='container mx-auto my-12'>
            <div className='text-center mb-10'>
                <h1 className='text-[#001931] text-3xl font-bold'>
                    Our All Applications
                </h1>
                <p className='text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div>
                <div className='flex justify-between mb-4'>
                    <h2 className='font-bold'>
                        ({searchApps.length})Apps Found
                    </h2>
                    <label className="input">
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
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:p-10'>
                {
                    searchApps.map(app => (<Card key={app.id} app={app} />))
                }
            </div>
        </div >
    );
};

export default Apps;