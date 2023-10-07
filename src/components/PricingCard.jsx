import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types'

const PricingCard = ({ pricingPackage, handlePurchase }) => {
    const { package: title, price, consultation, decorations, vendorCoordination, guests, eventDuration, customizedTheme, photography, onlineSupport } = pricingPackage;
    // console.log(pricingPackage);
    // const price = pricingPackage;
    return (
        <div className="bg-white p-8 rounded-lg flex flex-col items-center">
            <div className="flex flex-col items-center my-5">
                <h4 className="text-xl text-green-500 mb-2 font-medium">{title}</h4>
                <h2 className="flex items-start text-[#2A3342]"><span className="text-lg mr-2">Price:</span><span className="text-4xl font-semibold">{price}</span></h2>
            </div>
            <div>
                <ul>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{consultation}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{decorations}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{vendorCoordination}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{guests}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{eventDuration}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{customizedTheme}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{photography}</span></li>
                    <li className="flex items-start gap-2"><AiFillCheckCircle className="text-green-500 mt-[4px]" /> <span className="text-[#556987]">{onlineSupport}</span></li>
                </ul>
            </div>
            <div className="mt-auto w-full">
                <button onClick={() => handlePurchase(title)} className="w-full bg-green-500 text-white px-4 py-2 rounded-md mt-5">Purchase</button>
            </div>
        </div>
    );
};

PricingCard.propTypes = {
    pricingPackage: PropTypes.object,
    handlePurchase: PropTypes.func,
}

export default PricingCard;