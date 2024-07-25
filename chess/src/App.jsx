import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import "./App.css";
import MyRouter from "./components/MyRouter.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPopup, setUser } from "./redux/slices/user.js";
import Snackbar from '@mui/material/Snackbar';

export default function App() {
  const dispatch = useDispatch();
  const [userData] = useAuthState(auth);
  const { loading, error, popup } = useSelector(state => state.user)

  useEffect(() => {
    if (userData) {
      const dataToSet = {
        uid: userData.uid,
        displayName: userData.displayName,
        email: userData.email,
        photoUrl: userData.photoURL,
      };
      console.log("dataToSet: ", userData);
      dispatch(setUser(dataToSet));
    }
  }, [userData, dispatch]);

  return (
    <>
      <Snackbar
        open={popup}
        autoHideDuration={3000}
        onAnimationEnd={() => dispatch(setError(""))}
        onClose={() => dispatch(setPopup(false))}
        message={error}
      />
      <div className="wrapper">
        <MyRouter />
      </div>
    </>
  );
}
