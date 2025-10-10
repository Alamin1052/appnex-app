import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className=' bg-[#fbf7f5] flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster position='top-center' reverseOrder={false} />
        </div>
    );
};

export default Root;