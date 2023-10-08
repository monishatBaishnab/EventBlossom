import PageTitle from "../../components/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import TeamMamberCard from "../../components/TeamMamberCard";
import useFetchTeamMambers from "../../hooks/useFetchTeamMambers";

const About = () => {
    const { team_members } = useFetchTeamMambers();
    return (
        <div>
            <PageTitle pageName={'About'} title={'About Our Story'} />
            <div data-aos="fade-left" data-aos-duration="500" className="c-container">
                <h2 className="text-2xl font-medium text-center"></h2>
                <p className="text-gray-500 mt-5">Welcome to EventBlossom, your premier partner for creating unforgettable social events in the vibrant and culturally rich landscape of Bangladesh. At EventBlossom, we specialize in curating exceptional social experiences that celebrate the diversity and warmth of Bangladeshi culture. Our journey began with a passion for bringing people together and crafting moments that leave lasting impressions. Over the years, we have grown into a dedicated team of event enthusiasts who take pride in transforming your ideas into reality. Whether its a grand wedding, a joyous festival, a corporate gathering, or an intimate family celebration, we have the expertise and creativity to make your event a resounding success.</p>
                <h5 className="text-xl text-green-500 font-medium my-5">Why Choose Us?</h5>
                <ul>
                    <li className="text-gray-500"><span className="text-green-500 font-medium text-lg mr-2">Local Expertise:</span>We are deeply rooted in the heart of Bangladesh, understanding the intricacies of its various traditions and customs. This local insight allows us to infuse authenticity and tradition into every event we organize.</li>
                    <li className="text-gray-500"><span className="text-green-500 font-medium text-lg mr-2">Innovative Concepts:</span>Our team is fueled by creativity, constantly pushing the boundaries to deliver fresh and innovative event concepts that reflect the essence of Bangladeshi culture while incorporating modern trends.</li>
                    <li className="text-gray-500"><span className="text-green-500 font-medium text-lg mr-2">Professional Excellence:</span>With years of experience, our dedicated professionals ensure meticulous planning, flawless execution, and seamless coordination, leaving you stress-free to enjoy your event.</li>
                    <li className="text-gray-500"><span className="text-green-500 font-medium text-lg mr-2">Attention to Detail:</span>Its the small details that make an event truly memorable. We believe in the power of details and ensure that every aspect, from décor to cuisine, is meticulously crafted to perfection.</li>
                    <li className="text-gray-500"><span className="text-green-500 font-medium text-lg mr-2">Personalized Service:</span>We treat every event as unique, tailoring our services to your specific needs and preferences. Your vision is our guiding star, and we work tirelessly to make it a reality.</li>
                </ul>
                <p className="text-gray-500 mt-5">At EventBlossom, we are not just event planners; we are memory-makers. Let us be a part of your journey to create cherished moments that will be talked about for generations to come. <br /> Contact us today, and together, we will embark on a remarkable journey to make your social event in Bangladesh a true celebration of life, love, and culture.</p>
            </div>
            <div className="c-container">
                <SectionTitle title={'Team'} description={'Our team is the best in the business.'} />
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        team_members?.map(team_member => <TeamMamberCard key={team_member.id} team_member={team_member} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;