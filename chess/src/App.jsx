import React, { useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import "./App.css";
import MyRouter from "./components/MyRouter.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPopup, setUser } from "./redux/slices/user.js";
import Snackbar from "@mui/material/Snackbar";
import { collection, getDocs, or, query, where } from "firebase/firestore";

export default function App() {
  const dispatch = useDispatch();
  const [userData] = useAuthState(auth);
  const { user, loading, error, popup } = useSelector((state) => state.user);

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

  // useEffect(() => {
  //   // firestore cleanup
  //   if (!user) {
  //     return;
  //   }
  //   const cleanup = async () => {
  //     const firestoreDocs = await getDocs(
  //       collection(db, "games"),
  //       query(
  //         or(where("player1", "==", user.uid), where("player2", "==", user.uid))
  //       )
  //     );
  //     console.log("firestoreDocs: ", firestoreDocs.docs);
  //   };
  //   cleanup();
  // }, [user]);

  return (
    <>
      <Snackbar
        open={popup}
        autoHideDuration={6000}
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
