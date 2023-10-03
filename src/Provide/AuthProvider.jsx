/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
     
    const createUser = (email,password) => {
        return 
    }
    
    const authInfo = {user,createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;