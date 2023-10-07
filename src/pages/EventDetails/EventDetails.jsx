import {useParams} from 'react-router-dom';
import useFetchEvents from '../../hooks/useFetchEvents';
import PageTitle from '../../components/PageTitle';
const EventDetails = () => {
    const {eventId} = useParams();
    const {eventServices} = useFetchEvents();
    const filterEvent = eventServices?.find(event => event.id === parseInt(eventId));
    const {title, details, eventPlanningDetails} = filterEvent || {};
    const {venue, themeOptions, catering, photography} = eventPlanningDetails || {};

    return (
        <div>
            <PageTitle title={title} pageName={'Event Details'} />
            <div className='c-container'>
                <div>
                    <h2 className='text-4xl font-medium'>{title}</h2>
                    <p className='mt-5'>{details}</p>
                    <h4 className='text-xl my-5 font-medium'>Event Plane Details</h4>
                    <ul>
                        <li><span className='text-green-500 mr-1'>Vanue: </span><span className='text-gray-500'>{venue}</span></li>
                        <li><span className='text-green-500 mr-1'>Theme Options:</span> <span className='text-gray-500'>{themeOptions}</span></li>
                        <li><span className='text-green-500 mr-1'>Catering: </span><span className='text-gray-500'>{catering}</span></li>
                        <li><span className='text-green-500 mr-1'>Photography: </span><span className='text-gray-500'>{photography}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;