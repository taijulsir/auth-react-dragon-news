import { Link } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar";


const Register = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] shadow-xl lg:w-[752px] mx-auto my-28 py-20">
                   <h1 className="text-4xl text-[#403F3F] font-semibold text-center pb-12">Register your account</h1>
                   <hr className="lg:w-[606px] mx-auto" />
                   <form className="mt-12 px-24">
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb-4">Your Name</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="text" name="name" id="" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb- pt-6">Photo Url</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="text" name="photoUrl" id="" placeholder="Enter your photo url"/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb-4 pt-6">Email Account</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="email" name="email" id="" placeholder="Enter your email address"/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pt-6 pb-4 ">Password</p>
                            <input className="w-full bg-[#F3F3F3] p-5 mb-7 " type="password" name="password" id="" placeholder="Enter your password"/>
                        </div>
                        <div>
                            <input className="btn bg-[#403F3F] w-full text-[#FFFFFF]" type="submit" value="Login"/>
                        </div>
                        <div className="py-7">
                            <p className="text-base text-[#403F3F] font-semibold text-center">Already have an account? <Link className=" text-red-600" to="/login">Login</Link></p>
                        </div>
                   </form>
            </div>
        </div>
    );
};

export default Register;