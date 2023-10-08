import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const authContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [success, setSuccess] = useState('');

    const singUpWithEmailPass = (email, password) => {
        setLoadingUser(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singInWithEmailPass = (email, password) => {
        setLoadingUser(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        setLoadingUser(true);
        return signInWithPopup(auth, googleProvider);
    }
    const singOutUser = () => {
        setLoadingUser(true);
        return signOut(auth, googleProvider);
    }
    const updateUser = (name, photoUrl) => {
        setLoadingUser(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        });
    }

    useEffect(() => {
        // setUserError('');
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        setLoadingUser(false);
    }, [])

    const authInfo = {
        user,
        singUpWithEmailPass,
        signInWithGoogle,
        singInWithEmailPass,
        singOutUser,
        loadingUser,
        updateUser,
        success,
        setSuccess
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;