import Header from "../SharedPages/Header";
import LeftSideNav from "../SharedPages/LeftSideNav";
import Navbar from "../SharedPages/Navbar";
import RightSideNav from "../SharedPages/RightSideNav";
import ShowNews from "../SharedPages/ShowNews";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
           <Header></Header> 
           <BreakingNews></BreakingNews>
           <Navbar></Navbar>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 ">             
                    <ShowNews></ShowNews>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
           </div>
        </div>
    );
};

export default Home;