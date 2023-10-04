import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar";
import AuthHook from "../CustomHook/AuthHook";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {
    const {signIn,resetPassword} = AuthHook();
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef();

    const handleLogin =(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if(!email.emailVerified){
            toast.error("Please verify your email")
            return;
        }
        signIn(email, password)
        .then(results => {
            const result = results.user;
            console.log(result)
            toast.success('Succesfully Login')

            // after login 
            navigate(location?.state? location.state : '/')
        })
        .catch(err => {
            const errorMessage = err.message;
            toast.error(errorMessage);
        })
    }

    const handleReset =(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
    if(!email){ 

        toast.error("Provide your mail")
        return;
    }

    resetPassword(email)
    .then(results => {
        console.log(results);
        toast.success('Succesfully Reset Password')
    })
    .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage);
    })
    }
        

    return (
        <div>
            <Navbar></Navbar>
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] shadow-xl lg:w-[752px] h-[700px] mx-auto my-28 py-20">
                   <h1 className="text-4xl text-[#403F3F] font-semibold text-center pb-12">Login your account</h1>
                   <hr className="lg:w-[606px] mx-auto" />
                   <form onSubmit={handleLogin} className="mt-12 px-24">
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb-4">Email Account</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="email" name="email" id="email" ref={emailRef} placeholder="Enter your email address" required/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pt-6 pb-4 ">Password</p>
                            <input className="w-full bg-[#F3F3F3] p-5 mb-7 " type="password" name="password" id="password" placeholder="Enter your password" required/>
                        </div>
                        <div>
                            <input className="btn bg-[#403F3F] w-full text-[#FFFFFF]" type="submit" value="Login"/>
                        </div>
                        <div>
                            <Link onClick={handleReset} className="text-base text-[#403F3F] font-semibold text-center underline mt-5" href="">Forget Password</Link>
                        </div>
                        <div className="py-7">
                            <p className="text-base text-[#403F3F] font-semibold text-center">Don`t have an account? <Link className=" text-red-600" to="/register">Register</Link></p>
                        </div>
                   </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;