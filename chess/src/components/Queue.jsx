import React, { useEffect, useRef } from "react";
import { db } from "../config/firebase";
import {
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  where,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function Queue() {
  const { user } = useSelector((state) => state.user);
  
  const queueRef = collection(db, "Queue");
  const [queueData, loading, error] = useCollectionData(queueRef)

  console.log("queueData: ", queueData);

  const addToQueue = async () => {
    try {
      // Use setDoc to create or overwrite the document with the user's UID
      console.log("user.uid: ", user.uid);
      const userQueueRef = doc(queueRef, user.uid);
      await setDoc(userQueueRef, {
        uid: user.uid,
      });
      console.log("User added to queue");
    } catch (error) {
      console.log("Error adding user to queue:", error);
    }
  };

  const removeFromQueue = async () => {
    try {
      // Find and delete the document with the user's UID
      const q = query(queueRef, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log("User removed from queue");
    } catch (error) {
      console.log("Error removing user from queue:", error);
    }
  };
  useEffect(() => {
    console.log();
    // addToQueue();

    return () => {
      // removeFromQueue();
    };
  }, []);

  useEffect(() => {
  const cleanup = () => {
    // removeFromQueue();
  }

  window.addEventListener('beforeunload', cleanup);

  return () => {
    window.removeEventListener('beforeunload', cleanup);
  }
}, []);

  return <div style={{ color: "white" }}>Queue</div>;
}
