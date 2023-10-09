import { useParams } from 'react-router-dom';
import useFetchEvents from '../../hooks/useFetchEvents';
import PageTitle from '../../components/PageTitle';
const EventDetails = () => {
    const { eventId } = useParams();
    const { eventServices } = useFetchEvents();
    const filterEvent = eventServices?.find(event => event.id === parseInt(eventId));
    const { title, details, eventPlanningDetails, eventImage } = filterEvent || {};
    const { venue, themeOptions, catering, photography } = eventPlanningDetails || {};

    return (
        <div>
            <PageTitle pageName={title} title={'Event Details Overview'} />
            <div className='c-container'>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                    <div className='p-5 border rounded-md overflow-hidden'>
                        <img className='w-full h-full object-cover rounded-sm' src={eventImage} alt={title} />
                    </div>
                    <div>
                        <h2 className='text-4xl font-medium'>{title}</h2>
                        <p className='mt-5'>{details}</p>
                        <h4 className='text-xl my-5 font-medium'>Event Plane Details</h4>
                        <ul>
                            <li><span className='text-green-500 mr-1'>Vanue: </span><span className='text-gray-500'>{venue}</span></li>
                            <li><span className='text-green-500 mr-1'>Theme Options:</span> <span className='text-gray-500'>{themeOptions}</span></li>
                            <li><span className='text-green-500 mr-1'>Catering: </span><span className='text-gray-500'>{catering}</span></li>
                            <li><span className='text-green-500 mr-1'>Photography: </span><span className='text-gray-500'>{photography}</span></li>
                            <li><span className='text-green-500 mr-1'>Pricing: </span><span className='text-gray-500'>We have three different price option. Compare our pricing options to find the perfect fit for your event budget.</span></li>
                        </ul>
                        <button className='mt-5 px-6 py-1.5 rounded-md bg-green-500 text-white'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;