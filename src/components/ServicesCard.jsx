import { SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidNotepad } from 'react-icons/bi'

const ServicesCard = ({ eventService }) => {
    const { id, title, details, eventImage, rating, count } = eventService;
    
    return (
        <SwiperSlide>
            <div data-aos='fade-right' className='p-5 border rounded-lg'>
                <div className='w-full h-[180px] overflow-hidden rounded-md'>
                    <img className='w-full h-full object-cover' src={eventImage} alt={title} />
                </div>
                <div>
                    <h3 className='text-xl mt-3 text-green-500 text-center font-medium'>{title}</h3>
                    <p className='text-center text-sm text-gray-700'>{details.length > 30 ? details.slice(0, 30) + ' ...' : details}</p>
                    <div>
                        <div className='flex justify-between gap-1 mt-2'>
                            <span className='text-center gap-1 text-gray-500 flex items-center'>
                                <span><AiFillStar /></span>
                                <span>({rating})</span>
                            </span>
                            <span className='text-center gap-1 text-gray-500 rounded-sm flex items-center'>
                                <BiSolidNotepad />{count} <span>Event organized</span>
                            </span>
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