import { Link, NavLink } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaUserCircle } from 'react-icons/fa'
import { authContext } from "../../authProvider/authProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const { user, singOutUser } = useContext(authContext);
    return (
        <nav className="c-container py-5 border-b">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button onClick={() => setOpen(true)} className="text-xl transition-all text-gray-500 inline-block hover:text-green-500 md:hidden"><FaBars /></button>
                    <Link type='/' className="text-2xl text-green-400 font-medium">EventBlossom</Link>
                </div>
                <div className={`
                fixed top-0 bg-white w-56 border-r transition-all z-50
                ${open === true ? 'visible opacity-100 left-0' : 'invisible opacity-0 -left-10'}
                md:w-auto md:border-r-0 md:bg-transparent bottom-0 md:static md:visible md:opacity-100
                `}>
                    <div className="flex items-center justify-between p-5 pb-0 md:hidden">
                        <Link className="text-xl  text-green-400 font-medium">EventBlossom</Link>
                        <button onClick={() => setOpen(false)} className="text-xl text-gray-500 hover:text-green-500"><AiOutlineCloseCircle /></button>
                    </div>
                    <ul className="flex gap-3 flex-col p-5 md:p-0 md:flex-row">
                        <li><NavLink onClick={() => setOpen(false)} className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/'>Home</NavLink></li>
                        <li><NavLink onClick={() => setOpen(false)} className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/about'>About</NavLink></li>
                        {user !== null &&
                            <>
                                <li><NavLink onClick={() => setOpen(false)} className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/events'>Events</NavLink></li>
                                <li><NavLink onClick={() => setOpen(false)} className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : 'text-gray-500 transition-all hover:text-green-500'} to='/vanueList'>Vanue List</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="relative">
                        {
                            user !== null ? 
                            <div className="flex items-center cursor-pointer gap-1"  onClick={() => setOpenProfile(!openProfile)}><img className="w-8 h-auto border rounded-full" src={user?.photoURL} /> <FaAngleDown className={`text-gray-500 transition-all ${openProfile === true ? 'rotate-180' : 'rotate-0'}`} /> </div>
                            : <FaUserCircle className="text-2xl" />
                        }

                        <div className={`absolute right-0 w-[250px] bg-white z-50 p-5 transition-all rounded-b-md border ${openProfile === true ? 'visible opacity-100 top-[52px]' : 'invisible opacity-0 top-[48px]'}`}>
                            <span className="block text-sm mt-2 text-gray-500">{user?.displayName}</span>
                            <span className="block text-sm mt-2 text-gray-500">{user?.email?.toLowerCase()}</span>
                            <button onClick={() => {
                                singOutUser().then().catch();
                                setOpenProfile(false);
                            }} className="bg-gray-50 px-4 py-2 w-full rounded-md mt-5">Logout</button>
                        </div>
                    </div>
                    {
                        user === null && <Link to='/login' className="text-gray-500 transition-all hover:text-green-500">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;