import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import Loading from "../../layouts/Loading/Loading";
import { useContext } from "react";
import { authContext } from "../../authProvider/authProvider";

const Root = () => {
    const { state } = useNavigation();
    const { loadingUser } = useContext(authContext);
    return (
        <div>
            {loadingUser == true && <Loading />}
            <Navbar />
            {state === 'loading' ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default Root;