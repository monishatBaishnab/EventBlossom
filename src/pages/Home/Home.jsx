import Header from "../../layouts/Header/Header";
import Pricing from "../../layouts/Pricing/Pricing";
import Services from "../../layouts/Services/Services";
import Testimonials from "../../layouts/Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Header />
            <Services />
            <Pricing />
            <Testimonials />
        </div>
    );
};

export default Home;