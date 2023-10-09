import PropTypes from 'prop-types';
const SectionTitle = ({ title, description }) => {
    return (
        <div className='c-container overflow-hidden'>
            <div className="flex justify-center items-center flex-col">
                <h5 className="text-lg px-2 rounded-md mb-2 bg-green-100 text-green-500 inline-block" data-aos='fade-right'>{title}</h5>
                <h2 className="text-2xl font-medium text-center" data-aos="fade-left" data-aos-delay='200'>{description}</h2>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionTitle;