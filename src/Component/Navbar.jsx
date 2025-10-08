import React from 'react';
import { FaBeer, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto  ">
                <div className="navbar-start container">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <Link to='/apps'>Apps</Link>
                            </li>
                            <li><Link to='/installation'>Installation</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className="w-5 h-5 " src={logo} alt="" />
                        <Link to='/' className='text-xl font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>
                            Appnex</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-violet-500 underline" : "text-black"} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-violet-500 underline mx-4" : "text-black mx-4"} to='/apps'>Apps</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-violet-500 underline" : "text-black"} to='/installation'>Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/Alamin1052" className="text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub />Contribute</a>
                </div>
            </div >
        </div >
    );
};

export default Navbar;