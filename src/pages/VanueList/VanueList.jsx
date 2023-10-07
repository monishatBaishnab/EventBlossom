import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import VanueCard from "../../components/VanueCard";

const VanueList = () => {
    const { venues } = useLoaderData();
    
    return (
        <div>
            <PageTitle title={'Discover the Perfect Venue for Your Event'} pageName={'Venues'} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        venues?.map(venue => <VanueCard key={venue.id} vanue={venue} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default VanueList;