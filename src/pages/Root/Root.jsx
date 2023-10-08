import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import Loading from "../../layouts/Loading/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import Toast from "../../components/Tost";
import { authContext } from "../../authProvider/authProvider";

const Root = () => {
    const { state } = useNavigation();
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
   useEffect(() => {
        AOS.init();
   },[])
    return (
        <div className="overflow-hidden">
            {/* {loadingUser == true && <Loading />} */}
            <Navbar />
            {state === 'loading' ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default Root;