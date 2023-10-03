/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  signOut } from "firebase/auth";

import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
     
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password);
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, currrentUser => {
           setUser(currrentUser);
           setLoading(false);
        });
        return () => unsubscribe;
    },[])
    
    const authInfo = {user,loading, createUser,signIn,signOutUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;