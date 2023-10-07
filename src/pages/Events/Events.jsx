import { useLoaderData } from "react-router-dom";
import OurEventCard from "../../components/OurEventCard";
import PageTitle from "../../components/PageTitle";

const Events = () => {
    const {events} = useLoaderData();
    return (
        <div>
            <PageTitle pageName={'Events'} title={'Explore Our Latest Experiences'} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    {
                        events?.map(event => <OurEventCard key={event.id} event={event} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Events;