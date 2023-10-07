import { Link } from "react-router-dom";
import {FaAngleLeft } from 'react-icons/fa6'

const Error = () => {
    return (
        <div>
            <div className="c-container flex flex-col items-center justify-center gap-2 h-screen">
                <h2 className="text-4xl text-[#2A3342] font-medium">404 Not Found</h2>
                <p className="max-w-sm text-center">Oops! Looks like you have taken a wrong turn in the party planning journey. </p>
                <Link to="/" className="text-green-500 flex items-center"><FaAngleLeft className="text-xl text-[#2A3342] mr-2" />Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;