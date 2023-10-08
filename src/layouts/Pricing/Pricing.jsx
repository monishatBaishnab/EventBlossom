import SectionTitle from "../../components/SectionTitle";
import useFetchPricing from "../../hooks/useFetchPricing";
import PricingCard from "../../components/PricingCard";
import { useContext } from "react";
import { authContext } from "../../authProvider/authProvider";
import Swal from "sweetalert2";

const Pricing = () => {
    const pricingTitle = 'Pricing';
    const pricingDescription = 'Flexible pricing plan for your Social Event';
    const { pricingPackages } = useFetchPricing();
    const { user } = useContext(authContext);
    const handlePurchase = (title) => {
        if (user === null) {
            Swal.fire(
                'Warning',
                "You are not logged in yet, please login first.",
                'warning'
            )
            return;
        }
        Swal.fire(
            'Congratulations!',
            "You have purchased " + title + '.',
            'success'
        )
    }
    return (
        <div className="bg-[#F7F8F9] overflow-hidden">
            <SectionTitle title={pricingTitle} description={pricingDescription} />
            <div className="c-container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
                    {
                        pricingPackages?.map(pricingPackage => <PricingCard key={pricingPackage.id} handlePurchase={handlePurchase} pricingPackage={pricingPackage} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;