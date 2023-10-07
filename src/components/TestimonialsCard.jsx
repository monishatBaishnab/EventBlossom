import PropTypes from 'prop-types';

const TestimonialsCard = ({ testimonial }) => {
    const {comment, profile_name, profile_image, profile_identity} = testimonial;
    return (
        <div>
            <div className="flex flex-col items-center bg-white">
                <div className="flex flex-col items-center">
                    <span className="px-2 bg-green-500 text-white rounded-md mb-2">QUOTES</span>
                    <p className="text-xl text-[#2A3342] text-center mb-10">{comment}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-[100px] w-[100px] overflow-hidden rounded-full mb-4">
                        <img className="w-full h-full object-cover" src={profile_image} alt={profile_name} />
                    </div>
                    <h4 className="text-xl font-medium text-green-500">{profile_name}</h4>
                    <p>{profile_identity}</p>
                </div>
            </div>
        </div>
    );
};

TestimonialsCard.propTypes = {
    testimonial: PropTypes.object,
}

export default TestimonialsCard;