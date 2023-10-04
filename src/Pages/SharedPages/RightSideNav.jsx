
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"
import bg from "../../assets/bg.png"
import AuthHook from "../../CustomHook/AuthHook";
const RightSideNav = () => {

    const {googleLogin, githubLogin} = AuthHook();
    const handlePopupLogin = (media) => {
        media()
        .then(result => {
            const users = result.user
            console.log(users)
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    const bgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div>

            {/* login with section */}
            <div className="px-3 mt-8">
                <h3 className="text-[#403F3F] font-semibold text-2xl mb-6">Login With</h3>
                <button onClick={()=> handlePopupLogin(googleLogin)} className="btn w-full border border-blue-500 text-sky-700 mb-4 ">
                    <FaGoogle></FaGoogle>Login With Google</button>
                <button onClick={() => handlePopupLogin(githubLogin)} className="btn w-full border "> <FaGithub></FaGithub>Login With Github</button>
            </div>

            {/* Find Us Section */}
            <div className="px-3 mt-8">
                <h3 className="text-[#403F3F] font-semibold text-2xl mb-6">Find Us On</h3>
                <div className="bg-[#FFF] shadow-xl">
                    <button className=" items-center w-full border p-4 rounded-t-lg "><a className="flex" href="https://www.facebook.com/taijulislam41"><FaFacebook className="mr-2 text-2xl text-sky-600"></FaFacebook>Facebook</a></button>
                    <button className=" items-center w-full border p-4 "> <a className="flex" href="https://twitter.com/PrinceTaijul"><FaTwitter className="mr-2 text-2xl text-sky-600"></FaTwitter>Twitter</a></button>
                    <button className=" flex items-center w-full border p-4 rounded-b-lg "> <a className="flex" href=""><FaInstagram className="mr-2 text-2xl text-[#FD1D1D]"></FaInstagram>Instagram</a></button>
                </div>
            </div>

            {/* Q zone Section */}
            <div className="px-3 mt-8 bg-[#F3F3F3] space-y-6">
                <h3 className="text-[#403F3F] font-semibold text-2xl mb-6">Q-Zone</h3>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />              
            </div>

            {/* Creating a amazing newspaper sectin */}
            <div className="mt-6 space-y-6 text-center text-white py-16" style={bgStyle}>
             
                <h3 className="text-[30px] font-bold text-2xl mb-6">Creating an amazing newspaper</h3>
                <p className="text-base w-2/3 mx-auto">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="text-white bg-[#D72050] px-5 py-4" >Learn More</button>
               
            </div>

        </div>
    );
};

export default RightSideNav;