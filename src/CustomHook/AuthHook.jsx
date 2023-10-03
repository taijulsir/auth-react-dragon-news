import { useContext } from "react";
import { AuthContext } from "../Provide/AuthProvider";


const AuthHook = () => {
   const all = useContext(AuthContext)
   return all;
};

export default AuthHook;