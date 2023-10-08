import { useContext } from "react";
import { authContext } from "../authProvider/authProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const { user } = useContext(authContext);
    console.log(user);
    if(!user){
        return <Navigate to='/login' />
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;