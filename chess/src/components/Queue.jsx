import React, { useEffect, useRef, useState } from "react";
import { db, rtdb } from "../config/firebase";
import {
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  collection,
  or,
  addDoc,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  ref,
  set,
  remove,
  onDisconnect,
  onValue,
  get,
  onChildAdded,
  push,
  onChildRemoved,
} from "firebase/database";
import { showPopup } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";

export default function Queue() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [queueData, setQueueData] = useState([]);
  const [opponent, setOpponent] = useState("");
  const [gameId, setGameId] = useState("");

  const userQueueRTDBRef = ref(rtdb, `queue/${user.uid}`);
  const queueRTDBRef = ref(rtdb, "queue/");
  const gamesRTDBRef = ref(rtdb, "games/");

  const gameRef = collection(db, "games");
  const [gamesData, setGamesData] = useState([]);

  const [timer, setTimer] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    get(queueRTDBRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          setQueueData(Object.values(snapshot.val() || {}));
        }
      })
      .catch((error) => {
        console.error("error while getting queue data: ", error);
      });
    onValue(
      gamesRTDBRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setGamesData([snapshot.val()]);
        } else {
          setGamesData([]);
        }
      },
      (error) => {
        console.log(error);
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

      const gamesCollectionRef = collection(db, "games");
      const docRef = await addDoc(gamesCollectionRef, gameData); // using addDoc so that firebase auto generates a unique id
      await set(ref(rtdb, `games/${docRef.id}`), gameData, { merge: true });
    };

    processQueue();
  }, [queueData]);

  useEffect(() => {
    if (gamesData && gamesData.length > 0 && !opponent) {
      console.log("gamesData: ", gamesData);
      const filtered = gamesData.find((gameObj) => {
        const game = Object.values(gameObj)[0];
        return (
          game.status === "waiting" &&
          (game.player1 === user.uid || game.player2 === user.uid)
        );
      });
      console.log("filtered game data: ", filtered);
      if (Object.values(filtered).length > 0) {
        const game = Object.values(filtered)[0];
        const gameID = Object.keys(filtered)[0];
        console.log("game: ", game);
        removeFromQueue();
        setGameId(gameID);
        setOpponent(game.player1 === user.uid ? game.player1 : game.player2);
        onDisconnect(ref(rtdb, `games/${gameID}`))
          .remove()
          .then(() => {
            console.log("onDisconnect setup for game");
          })
          .catch((error) => {
            console.error("Error setting up onDisconnect:", error);
          });
        onChildRemoved(
          ref(rtdb, `games/${gameID}`),
          () => {
            setOpponent("");
            setGameId("");
            // addToQueue();
            navigate('/')
            dispatch(showPopup("Opponent disconnected"));
          },
          (error) => {
            console.log(error);
          }
        );
        setTimeout(() => {
          if(gameID){
            navigate(`/online/${gameID}`);
          }
        }, 5000);
      }
    }
  }, [gameId, gamesData]);

  useEffect(() => {
    if (opponent) {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1);
        } else {
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [opponent]);

  const addToQueue = async () => {
    try {
      await set(userQueueRTDBRef, {
        uid: user.uid,
      });

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
      // remove(ref(rtdb, `games/${gameId}`));
    };
  }, []);

  return (
    <div style={{ color: "white" }}>
      {/* {opponent ? `Opponent found: ${opponent}` : "Waiting in Queue. . ."} */}
      {opponent ? `Match Found ${timer}` : "waiting in queue. . ."}
    </div>
  );
}
