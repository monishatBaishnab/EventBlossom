import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import PropTypes from 'prop-types';

const TeamMamberCard = ({team_member}) => {
    const { name, image, position } = team_member || {};
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex items-center flex-col border p-8 rounded-md">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <img src={image} alt={name} />
            </div>
            <h3 className="text-xl mt-3 text-green-400">{name}</h3>
            <p className="text-gray-500">{position}</p>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsFacebook /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsInstagram /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsTwitter /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsLinkedin /></span>
            </div>
        </div>
    );
};

TeamMamberCard.propTypes = {
    team_member: PropTypes.object,
}

export default TeamMamberCard;