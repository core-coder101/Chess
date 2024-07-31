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
import { get, ref } from "firebase/database";

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

  useEffect(() => {
    // firestore cleanup
    if (!user) {
      return;
    }
    const cleanup = async () => {
      const firestoreDocs = await getDocs(
        collection(db, "games"),
        query(
          and(
            or(
              where("player1", "==", user.uid),
              where("player2", "==", user.uid)
            ),
            or(
              where("status", "==", "waiting"),
              where("status", "==", "ongoing")
            )
          )
        )
      );
      // let docs = [];
      firestoreDocs.forEach((game) => {
        deleteDoc(doc(db, "games", game.id));
      });
      // console.log("docs: ", docs);
      // just realized that if the user just logged on, he CAN't be in a game or waiting for a game, so we just delete the docs if there are any
      // let rtdbDocs = [];
      // get(ref(rtdb, "games/"))
      //   .then((snapshot) => {
      //     if (snapshot.exists) {
      //       rtdbDocs = snapshot.val();
      //     }
      //   })
      //   .catch((err) => console.error(err));
      // console.log("docs: ", docs);
      // console.log("rtdbDocs: ", rtdbDocs);
    };
    cleanup();
  }, [user]);

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
