import PropTypes from 'prop-types';

const OurEventCard = ({ event }) => {
    const { event_type, event_name, date, location, description, organizer, event_image } = event || {};
    return (
        <div data-aos="zoom-out-up" className="flex flex-col items-center border rounded-md" id='ourEvent'>
            <div className="w-full h-[300px] overflow-hidden rounded-t-md">
                <img id='ourEventImg' className="h-full w-full object-cover transition-all" src={event_image} alt={event_name} />
            </div>
            <div className="p-5">
                <span className="px-2 py-[2px] bg-green-500 text-white rounded-sm">{event_type}</span>
                <h5 className="text-xl font-medium my-3">{event_name}</h5>
                <p className="text-gray-500"><span className="bg-green-50 px-2 rounded-sm text-green-500">Date: </span>{date}</p>
                <p className="text-gray-500"><span className="bg-green-50 px-2 rounded-sm text-green-500">Location: </span>{location}</p>
                <p className="text-gray-500"><span className="bg-green-50 px-2 rounded-sm text-green-500">Organizer: </span>{organizer}</p>
                <p className="text-gray-700 mt-3">{description}</p>
            </div>
        </div>
    );
};

OurEventCard.propTypes = {
    event: PropTypes.object,
}

export default OurEventCard;