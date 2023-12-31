import { Link, NavLink } from "react-router-dom";
import userLogo from "../../assets/user.png"
import AuthHook from "../../CustomHook/AuthHook";

const Navbar = () => {
    const { user,signOutUser } = AuthHook()
    const handleSignOut = () => {
        signOutUser()
    }
    const navLinks =
        <>
            <li className="mr-3 text-[#706F6F] text-lg"><NavLink to="/">Home</NavLink></li>
            <li className="mr-3 text-[#706F6F] text-lg"><NavLink to="/about">About</NavLink></li>
            <li className="mr-3 text-[#706F6F] text-lg"><NavLink to="/carrer">Carrer</NavLink></li>
            <li className="mr-3 text-[#706F6F] text-lg"><NavLink to="/bookmarks">Bookmarks</NavLink></li>

        </>
    return (
        <div className="mt-9">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full mr-2">
                            <img src={userLogo} />
                        </div>
                    </label>
                    {
                        user ?
                         <button onClick={handleSignOut} className="btn bg-[#403F3F] text-white ">Sign Out</button>
                         :
                         <Link to="/login">
                            <button className="btn bg-[#403F3F] text-white ">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;