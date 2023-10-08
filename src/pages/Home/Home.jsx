import { useContext, useEffect } from "react";
import Toast from "../../components/Tost";
import Header from "../../layouts/Header/Header";
import Pricing from "../../layouts/Pricing/Pricing";
import Services from "../../layouts/Services/Services";
import Testimonials from "../../layouts/Testimonials/Testimonials";
import { authContext } from "../../authProvider/authProvider";

const Home = () => {
    const { success, setSuccess } = useContext(authContext);
    if (success !== '') {
        Toast.fire({
            icon: 'success',
            title: success
        })
    }
    useEffect(() => {
        setTimeout(() => {
            {
                success !== '' && setSuccess('')
            }
        }, 1000);
    }, [setSuccess, success])
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