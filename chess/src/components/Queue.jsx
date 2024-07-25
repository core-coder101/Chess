import React, { useEffect, useRef, useState } from "react";
import { db, rtdb } from "../config/firebase";
import {
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { ref, set, remove, onDisconnect, onValue } from "firebase/database";
import { showPopup } from "../redux/slices/user";

let flag = true;

export default function Queue() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [queueData, setQueueData] = useState([]);
  const [opponent, setOpponent] = useState("");
  const [gameId, setGameId] = useState("");

  const userQueueRTDBRef = ref(rtdb, `queue/${user.uid}`);
  const queueRTDBRef = ref(rtdb, "queue/");

  const gameRef = gameId ? doc(db, "games", gameId) : null;
  const [gameData, loading, error] = useDocumentData(gameRef);

  useEffect(() => {
    onValue(
      queueRTDBRef,
      (snapshot) => {
        if (!snapshot) {
          return;
        }
        setQueueData(Object.values(snapshot.val() || {}));
      },
      (error) => {
        setQueueData([]);
        console.error("error in onValue: ", error);
      }
    );
  }, []);

  useEffect(() => {
    const processQueue = async () => {
      console.log("queueData: ", queueData);
      const temp = queueData.filter((entry) => entry.uid === user.uid);
      if (!(temp.length > 0)) {
        return;
      }

      const filtered = queueData.filter((entry) => entry.uid !== user.uid);
      console.log("filtered: ", filtered);
      if (!(filtered.length > 0)) {
        return;
      }

      setOpponent(filtered[0].uid);

      // create game first ig
      // player 1 will be the first one in queue
      const userPositionInQueue = queueData.findIndex(
        (entry) => entry.uid === user.uid
      );
      const opponentPositionInQueue = queueData.findIndex(
        (entry) => entry.uid === filtered[0].uid
      );
      let gameData;
      let localGameId;
      if (userPositionInQueue < opponentPositionInQueue) {
        // user was in queue first
        localGameId = user.uid + "-" + filtered[0].uid;
        gameData = {
          player1: user.uid,
          player2: filtered[0].uid,
          status: "waiting",
          createdAt: new Date().toISOString(),
        };
      } else {
        // opponent was in queue first
        localGameId = filtered[0].uid + "-" + user.uid;
        gameData = {
          player1: filtered[0].uid,
          player2: user.uid,
          status: "waiting",
          createdAt: new Date().toISOString(),
        };
      }

      setGameId(localGameId);

      const gameRef = doc(db, "games", localGameId);
      await setDoc(gameRef, gameData, { merge: true });

      removeFromQueue();
    };

    processQueue();
  }, [queueData]);

  useEffect(() => {
    if (!gameId) {
      return;
    }
    if (!gameData && !loading) {
      console.log("gameData: ", gameData);
      setOpponent("");
      setGameId("");
      dispatch(showPopup("Opponent disconnected"));
    }
  }, [gameId]);

  const addToQueue = async () => {
    if (!flag) {
      return;
    } else {
      flag = false;
    }
    try {
      // Realtime Database reference

      await set(userQueueRTDBRef, {
        uid: user.uid,
      });

      // Set up onDisconnect
      onDisconnect(userQueueRTDBRef)
        .remove()
        .then(() => {
          console.log("onDisconnect setup for user");
        })
        .catch((error) => {
          console.error("Error setting up onDisconnect:", error);
        });

      console.log("User added to queue");
    } catch (error) {
      console.error("Error adding user to queue:", error);
    }
  };

  const removeFromQueue = async () => {
    try {
      await remove(userQueueRTDBRef)
        .then(() => {
          console.log("removed");
        })
        .catch((error) => {
          console.error("error removing user from queue: ", error);
        });
    } catch (error) {
      console.error("error while removing user from queue: ", error);
    }
  };

  useEffect(() => {
    if (gameId) {
      return;
    }
    console.log("adding");
    addToQueue();

    return () => {
      console.log("removing");
      removeFromQueue();
    };
  }, []);

  return (
    <div style={{ color: "white" }}>
      {opponent ? `Opponent found: ${opponent}` : "Waiting in Queue. . ."}
    </div>
  );
}
