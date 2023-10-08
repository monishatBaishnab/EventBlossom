import { useContext } from "react";
import { authContext } from "../authProvider/authProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import Loading from "../layouts/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loadingUser } = useContext(authContext);

    if (loadingUser === true) {
        return <Loading />
    }
    if (user !== null) {
        return children;
    }
    return <Navigate to='/login' />
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;