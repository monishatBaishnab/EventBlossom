import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const TeamMamberCard = ({team_member}) => {
    const { name, image, position, mobile, email } = team_member || {};
    return (
        <div className="flex items-center flex-col border p-8 rounded-md">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <img src={image} alt={name} />
            </div>
            <h3 className="text-xl mt-3 text-green-400">{name}</h3>
            <p className="text-gray-500">{position}</p>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsFacebook /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsInstagram /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsLinkedin /></span>
                <span className="text-xl cursor-pointer transition-all hover:text-gray-800"><BsYoutube /></span>
            </div>
        </div>
    );
};

export default TeamMamberCard;