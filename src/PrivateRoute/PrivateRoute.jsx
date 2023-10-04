/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../CustomHook/AuthHook";



const PrivateRoute = ({children}) => {
    const {user,loading} = AuthHook()
    // private  route ar kothay jete chaichi seta janar jnnno location..
    const location = useLocation()
    console.log(location);
    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    // location ar pathname ta state ar mdde sate kore dibo
    return <Navigate state={location.pathname} to="/login"> </Navigate>
     
};

export default PrivateRoute;