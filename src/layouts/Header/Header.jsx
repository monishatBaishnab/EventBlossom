
import {BsArrowRight} from 'react-icons/bs'
const Header = () => {
    return (
        <div data-aos="fade-left" className="bg-header-bg bg-cover bg-bottom min-h-[500px]">
            <div className="bg-green-50/80 min-h-[500px]">
                <div className="c-container">
                <div className="md:max-w-2xl mx-auto" data-aos='fade-right' data-aos-delay='300'>
                    <h2 className="pt-10 mb-5 text-lg md:text-3xl md:pt-20 font-medium">
                        <span className="md:text-xl">Connect</span> 
                        <span className="text-green-500 font-Playfair text-2xl block md:text-5xl">EventBlossom</span> 
                        <span className='mt-3 block'>Celebrate Your Social Events.</span></h2>
                    <p className=" text-gray-600 mb-4">Welcome to our vibrant social event website, where you can discover, plan, and share exciting gatherings with friends, family. </p>
                    <button className="flex items-center gap-2"><BsArrowRight className='text-xl text-green-500' />Contect Us</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;