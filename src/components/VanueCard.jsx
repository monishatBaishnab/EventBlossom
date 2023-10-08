import { AiFillStar } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import PropTypes from 'prop-types'

const VanueCard = ({ vanue }) => {
    const {venue_name, location, capacity, rating, price, type, image_url} = vanue || {};
    return (
        <div data-aos="zoom-out-up" className="relative">
            <span className="absolute left-3 top-3 px-2 py-[2px] bg-green-500 text-white rounded-sm">{type}</span>
            <div className="w-full h-[250px] overflow-hidden rounded-t-md">
                <img src={image_url} alt={venue_name} />
            </div>
            <div className="p-5 border border-t-0 rounded-b-md">
                <h4 className="text-xl text-gray-800 mb-3 font-medium">{venue_name}</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <AiFillStar className="text-yellow-400 text-lg" />
                        <span>{rating}</span>
                        <span className="text-gray-500"> 150</span>
                        <span className="text-gray-500"> {location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span><BsCashCoin /></span>
                        <span>{price}</span>
                        <span><FiUsers /></span>
                        <span>{capacity}</span>
                    </div>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

VanueCard.propTypes = {
    vanue: PropTypes.object,
}

export default VanueCard;