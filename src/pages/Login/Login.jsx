import { useLocation } from "react-router-dom";
import LoginForm from "../../layouts/LoginForm/LoginForm";

const Login = () => {
    const { state } = useLocation();
    return (
        <div>
            <LoginForm state={state} />
        </div>
    );
};

export default Login;