import { Link } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar";
import AuthHook from "../CustomHook/AuthHook";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    
    const {createUser, profileUpdate,verificationMail,signOutUser} = AuthHook()
    const [showPassword,setShowPassword] = useState(false)

    const handleRegister =(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photoUrl,email, password);

        // password validation
        if(password.length < 8){
            toast.error('Password must be at least 8 characters long')
            return;
        }
        if(!/[A-Z!@#$%^&*()_+]/g.test(password)){
            toast.error('Password must contain at least one uppercase letter and specain characters')
            return; 
        }
        createUser(email, password)
        .then(results => {
            const result = results.user;
            console.log(result)
        
            // profile update with name and picture
            profileUpdate(name,photoUrl)
            .then(results => {
                console.log(results)
            })
            .catch(errors => {
                console.log(errors)
            })

            //  verification email validation
            verificationMail()
            .then((result) => {
                console.log(result)
                toast.success('Succesfully Created.Now,Verify your email')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            })

            signOutUser();

        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        })
    }
    return (
        <div>
             <Navbar></Navbar>
            <div className=" bg-[#FFFFFF] border border-[#FFFFFF] shadow-xl lg:w-[752px] mx-auto my-28 py-20">
                   <h1 className="text-4xl text-[#403F3F] font-semibold text-center pb-12">Register your account</h1>
                   <hr className="lg:w-[606px] mx-auto" />
                   <form onSubmit={handleRegister} className="mt-12 px-24">
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb-4">Your Name</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="text" name="name" id="name" placeholder="Enter your name"required/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb- pt-6">Photo Url</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="text" name="photoUrl" id="photoUrl" placeholder="Enter your photo url" required/>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-[#403F3F] pb-4 pt-6">Email Account</p>
                            <input className="w-full bg-[#F3F3F3] p-5 " type="email" name="email" id="email" placeholder="Enter your email address" required/>
                        </div>
                        <div className=" relative">
                            <p className="text-xl font-semibold text-[#403F3F] pt-6 pb-4 ">Password</p>
                            <input className="w-full bg-[#F3F3F3] p-5 mb-7 " type={showPassword ? "text" :"password" }
                            name="password"
                            id="password" 
                            placeholder="Enter your password" required/>
                            <button className="absolute mt-5 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    
                                    showPassword? <FaEye className="text-2xl text-[#403F3F]"></FaEye> : <FaEyeSlash className="text-2xl text-[#403F3F]"></FaEyeSlash>
                                }
                            </button>
                        </div>
                        <div>
                            <input className="btn bg-[#403F3F] w-full text-[#FFFFFF]" type="submit" value="Register"/>
                        </div>
                        <div className="py-7">
                            <p className="text-base text-[#403F3F] font-semibold text-center">Already have an account? <Link className=" text-red-600" to="/login">Login</Link></p>
                        </div>
                   </form>
            </div>
             <Toaster />
        </div>
    );
};

export default Register;