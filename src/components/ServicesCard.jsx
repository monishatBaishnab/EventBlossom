import { SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({eventService}) => {
    const {id, title, details, eventImage} = eventService;
    return (
        <SwiperSlide>
            <div className='p-5 border rounded-lg'>
                <div className='w-full h-[180px] overflow-hidden rounded-md'>
                    <img className='w-full h-full object-cover' src={eventImage} alt={title} />
                </div>
                <div>
                    <h3 className='text-xl mt-3 text-green-500 text-center font-medium'>{title}</h3>
                    <p className='text-center text-sm text-gray-700'>{details.length > 25 ? details.slice(0, 25)+' ...' : details}</p>
                    <div>
                        <p className='text-center mt-2 text-sm border-b pb-2'>Features</p>
                        <div className='grid grid-cols-2 gap-1 mt-2'>
                            <span className='text-center border text-sm text-pink-500 border-pink-500 rounded-sm'>Venue</span>
                            <span className='text-center border text-sm text-pink-500 border-pink-500 rounded-sm'>ThemeOptions</span>
                            <span className='text-center border text-sm text-pink-500 border-pink-500 rounded-sm'>Catering</span>
                            <span className='text-center border text-sm text-pink-500 border-pink-500 rounded-sm'>Photography</span>
                        </div>
                    </div>
                    <Link to={`/eventDetails/${id}`} className='text-white w-full block text-center bg-green-500 px-4 py-2 rounded-md mt-4'>See Details</Link>
                </div>
            </div>
        </SwiperSlide>
    );
};

ServicesCard.propTypes = {
    eventService: PropTypes.object,
}

export default ServicesCard;