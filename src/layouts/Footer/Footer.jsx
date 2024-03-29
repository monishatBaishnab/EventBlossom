import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className="bg-slate-50">
            <div className="border-b">
                <div className="c-container">
                    <div className="mb-5 flex justify-center">
                        <Link className="text-3xl text-center text-green-400 font-medium">EventBlossom</Link>
                    </div>
                    <div>
                        <ul className="flex gap-3 flex-col items-center justify-center sm:flex-row">
                            <li><NavLink className='text-gray-500 transition-all hover:text-green-500' to='/'>Home</NavLink></li>
                            <li><NavLink className='text-gray-500 transition-all hover:text-green-500' to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="c-container py-5">
                <p className="text-center text-gray-700">&copy; 2023 <Link to='/' className="text-green-500">EventBlossom</Link>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;