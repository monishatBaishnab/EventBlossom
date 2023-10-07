import { Link } from "react-router-dom";
import Input from "../../components/Input";

const LoginForm = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }
    return (
        <div className="c-container">
            <div className="max-w-[400px] mx-auto">
                <h4 className="text-xl font-medium text-center mb-5 text-[#2A3342]">Sign In to Your EventBlossom</h4>
                <form onSubmit={handleLogin}>
                    <Input type='email' name='email' label='Email/User Name' />
                    <Input type='password' name='password' label='Password' />
                    <button type="submit" className="w-full bg-green-500 px-4 py-2 rounded-md text-white mt-2">Sign In</button>
                </form>
                <button className="flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 border border-[#EEF0F3] rounded-md"><img src="/google.jpg" alt="" />Sign in with Google</button>
                <p className="text-center mt-5">Don’t have an account? <Link to='/regester' className="text-green-500">Sign up</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;