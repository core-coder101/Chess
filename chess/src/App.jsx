import React, { useEffect, useState } from "react";
import { auth, db, rtdb } from "./config/firebase";
import "./App.css";
import MyRouter from "./components/MyRouter.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPopup, setUser } from "./redux/slices/user.js";
import Snackbar from "@mui/material/Snackbar";
import {
  and,
  collection,
  deleteDoc,
  doc,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import { ThemeProvider, createTheme } from "@mui/material";

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
    } else {
      dispatch(setUser(null));
    }
  }, [userData, dispatch]);

  useEffect(() => {
    // firestore cleanup
    if (!user) {
      return;
    }
  
    const cleanup = async () => {
      try {
        // Create a combined query to fetch documents where the user is either player1 or player2, and the status is either 'waiting' or 'ongoing'
        const firestoreQuery = query(
          collection(db, "games"),
          where("player1", "==", user.uid),
          where("status", "in", ["waiting", "ongoing"])
        );
  
        const firestoreQuery2 = query(
          collection(db, "games"),
          where("player2", "==", user.uid),
          where("status", "in", ["waiting", "ongoing"])
        );
  
        // Fetch the documents matching the queries
        const firestoreDocs1 = await getDocs(firestoreQuery);
        const firestoreDocs2 = await getDocs(firestoreQuery2);
  
        // Combine the results
        const firestoreDocs = [...firestoreDocs1.docs, ...firestoreDocs2.docs];
  
        // Delete each document found
        firestoreDocs.forEach((game) => {
          deleteDoc(doc(db, "games", game.id));
        });
  
      } catch (error) {
        console.error("Error cleaning up Firestore games:", error);
      }
    };
  
    cleanup();
  }, [user]);
  

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <Snackbar
        open={popup}
        autoHideDuration={6000}
        onAnimationEnd={() => dispatch(setError(""))}
        onClose={() => dispatch(setPopup(false))}
        message={error}
      />
      <ThemeProvider theme={darkTheme}>
        <div className="wrapper">
          <MyRouter />
        </div>
      </ThemeProvider>
    </>
  );
}
