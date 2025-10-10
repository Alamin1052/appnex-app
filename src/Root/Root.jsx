import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet, useRouteError } from 'react-router';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';
import ErrorPage from '../Pages/ErrorPage';

const Root = () => {

    const error = useRouteError();

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className=' bg-[#fbf7f5] flex-1'>
                {error ? (
                    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                        <ErrorPage></ErrorPage>
                    </div>
                ) : (
                    <Outlet />
                )}
            </div>
            <Footer></Footer>
            <Toaster position='top-center' reverseOrder={false} />
        </div>
    );
};

export default Root;