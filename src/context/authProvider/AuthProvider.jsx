import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer for auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // auth info
  const authInfo = {
    user,
    googleSignIn,
    logOut,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.any,
};
