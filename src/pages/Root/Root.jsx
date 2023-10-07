import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import Loading from "../../layouts/Loading/Loading";

const Root = () => {
    const { state } = useNavigation();

    return (
        <div>
            <Navbar />
            {state === 'loading' ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default Root;