import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSideNews from "./LeftSideNews";


const LeftSideNav = () => {
    const [categories,setcatogories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
      .then(res=>res.json())
      .then(data => setcatogories(data))
    },[])
   
    return (
        <div className="px-3 mt-8">
             <h3 className="text-[#403F3F] font-semibold text-2xl mb-6">All Category</h3>
             <button title="Natinal News" className="w-full text-[#403F3F] bg-[#E7E7E7] text-center py-4 font-semibold text-2xl mb-6">National News</button>
             <div>
                {
                    categories.map((category) => <NavLink
                    to={`category/${category.id}`}
                    key={category.id}
                    title={category.name}
                    className="block text-lg font-medium text-[#9F9F9F] mt-8"> 
                    {category.name}
                    
                    </NavLink> )
                }
             </div>

             <div className="mt-8">
                <LeftSideNews></LeftSideNews>
             </div>
        </div>
    );
};

export default LeftSideNav;