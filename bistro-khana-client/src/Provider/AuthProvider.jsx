import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Layout/Pages/Authentication/firebase.config';

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser]= useState();
    const [loading, setLoading]= useState(true);
    // signup with email and pass
    const signUp =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signin with email and pass
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signout
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    // updateprofile
    const updateName =(name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name
        })
    }
    const authInfo = {
        user,
        loading,
        signIn,
        signUp,
        logout,
        updateName
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, curentUser=>{
            setUser(curentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;