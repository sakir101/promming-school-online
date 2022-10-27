import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const signInGoogleHandler = (googleProvider) => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
         
      }

      const signInGithubHandler = (githubProvider) => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
         
      }

      
    const logOut = () => {
       setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setLoading(false)
           setUser(currentUser)
            
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {user, createUser, updateUserProfile, signIn, signInGoogleHandler, signInGithubHandler, logOut, loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;