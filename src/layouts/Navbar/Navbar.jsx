import { Link, NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from "react";
import { FaBars, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="c-container py-5 border-b">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button onClick={() => setOpen(true)} className="text-xl transition-all text-gray-500 inline-block hover:text-green-500 md:hidden"><FaBars /></button>
                    <Link type='/' className="text-2xl text-green-400 font-medium">EventBlossom</Link>
                </div>
                <div className={`
                absolute top-0 bg-white w-56 border-r transition-all
                ${open === true ? 'visible opacity-100 left-0' : 'invisible opacity-0 -left-10'}
                md:w-auto md:border-r-0 md:bg-transparent bottom-0 md:static md:visible md:opacity-100
                `}>
                    <div className="flex items-center justify-between p-5 pb-0 md:hidden">
                        <Link className="text-xl  text-green-400 font-medium">EventBlossom</Link>
                        <button onClick={() => setOpen(false)} className="text-xl text-gray-500 hover:text-green-500"><AiOutlineCloseCircle /></button>
                    </div>
                    <ul className="flex gap-3 flex-col p-5 md:p-0 md:flex-row">
                        <li><NavLink className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/events'>Events</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/vanueList'>Vanue List</NavLink></li>
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="text-2xl">
                        <FaUserCircle />
                    </div>
                    <Link to='/login' className="text-gray-500 transition-all hover:text-green-500">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;