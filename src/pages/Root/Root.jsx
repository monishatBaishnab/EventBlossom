import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import Loading from "../../layouts/Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Root = () => {
    const { state } = useNavigation();
   useEffect(() => {
        AOS.init();
   },[])
    return (
        <div>
            {/* {loadingUser == true && <Loading />} */}
            <Navbar />
            {state === 'loading' ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default Root;