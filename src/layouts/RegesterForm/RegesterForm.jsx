import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useContext } from "react";
import { authContext } from "../../authProvider/authProvider";
import Toast from "../../components/Tost";


const RegesterForm = () => {
    const { singUpWithEmailPass, updateUser, setSuccess, signInWithGoogle } = useContext(authContext);
    const navigate = useNavigate();


    const handleRegester = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        const cpassword = form.get('cpassword');
        if (password.length < 6) {
            Toast.fire('Password Length Too Short');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Toast.fire({
                icon: 'error',
                title: 'Password Missing Capital Letter.'
            })
            return;
        }
        if (!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(password)) {
            Toast.fire({
                icon: 'error',
                title: 'Password Missing Special Character.'
            })
            return;
        }
        if (password !== cpassword) {
            Toast.fire({
                icon: 'error',
                title: 'Password and Confirm Password Do Not Match.'
            })
            return;
        }

        singUpWithEmailPass(email, password)
            .then(() => {
                updateUser(name, photoUrl)
                    .then()
                    .catch(err => {
                        const error = err.message.slice(17, -2);
                        Toast.fire({
                            icon: 'error',
                            title: error
                        })
                    })
                setSuccess('Sign Up Successfull.');
                navigate('/');
            })
            .catch(err => {
                const error = err.message.slice(17, -2);
                Toast.fire({
                    icon: 'error',
                    title: error
                })
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess('Sign In Successfull.');
                navigate('/');
            })
            .catch(err => {
                const error = err.message.slice(17, -2);
                Toast.fire({
                    icon: 'error',
                    title: error
                })
            })
    }



    return (
        <div data-aos="fade-left" className="c-container">
            <div className="max-w-[400px] mx-auto">
                <h4 className="text-xl font-medium text-center mb-5 text-[#2A3342]">Sign Up to Your EventBlossom</h4>
                <form onSubmit={handleRegester}>
                    <Input type='text' name='name' label='Full Name' />
                    <Input type='text' name='photoUrl' label='Photo URL' />
                    <Input type='email' name='email' label='Email' />
                    {/* <p className="text-sm text-yellow-400">{error}</p> */}
                    <Input type='password' name='password' label='Password' />
                    <Input type='password' name='cpassword' label='Confirm Password' />
                    <button className="w-full bg-green-500 px-4 py-2 rounded-md text-white mt-2">Sign Up</button>
                </form>
                <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 w-full px-4 py-2 mt-4 border border-[#EEF0F3] rounded-md"><img src="/google.jpg" alt="" />Sign in with Google</button>
                <p className="text-center mt-5">Already have an account? <Link to='/login' className="text-green-500">Sign In</Link></p>
            </div>
        </div>
    );
};

export default RegesterForm;