import React, { useEffect, useState } from "react";
import "../css/Template.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Online from "./Online";
import { get, ref, update } from "firebase/database";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, rtdb } from "../config/firebase";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function OnlineTemplate({}) {
  const { ID } = useParams();
  const [opponentData, setOpponentData] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [endScreenData, setEndScreenData] = useState({
    gameState: "",
    message: "",
  })

  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showEndScreen = (name) => {
    if (name === "user") {
      setEndScreenData({
        gameState: "Game Over",
        message: `${user?.displayName || "N/A"} (${gameData?.player1 === user.uid ? "white" : "black"}) won by checkmate`,
      })
      setOpen(true)
    } else if (name === "opponent") {
      setEndScreenData({
        gameState: "Game Over",
        message: `${opponentData?.displayName || "N/A"} (${gameData?.player1 === opponentData?.uid ? "white" : "black"}) won by checkmate`,
      })
      setOpen(true)
    } else if (name === "stalemate") {
      setEndScreenData({
        gameState: "Game Over",
        message: "It's a stalemate",
      })
      setOpen(true)
    }
  };

  useEffect(() => {
    if (gameData && gameData.status === "waiting") {
      console.log("gameData: ", gameData);
      update(
        ref(rtdb, `games/${ID}`),
        { ...gameData, status: "ongoing" },
        { merge: true }
      );
      updateDoc(
        doc(db, "games", ID),
        { ...gameData, status: "ongoing" },
        { merge: true }
      );
}
  }, [gameData]);

  useEffect(() => {
    if(opponentData){
      return
    }
    const getOpponentData = async () => {
      try {
        let opponentDoc;
        if (gameData.player1 === user?.uid) {
          opponentDoc = await getDoc(doc(db, "users", gameData.player2));
        } else {
          opponentDoc = await getDoc(doc(db, "users", gameData.player1));
        }

        if (opponentDoc.exists()) {
          setOpponentData(opponentDoc.data());
          console.log("snapshot: ", opponentDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getOpponentData();
  }, [gameData])

  console.log("opponentData: ", opponentData);

  useEffect(() => {
    if (!ID) {
      navigate("/");
      return;
    }
    get(ref(rtdb, `games/${ID}`))
      .then((snapshot) => {
        if (
          snapshot.exists &&
          snapshot.val() &&
          (snapshot.val().player1 === user.uid ||
            snapshot.val().player2 === user.uid)
        ) {
          setGameData(snapshot.val());
        } else {
          setGameData(null);
          dispatch(showPopup("Invalid Game ID"));
          navigate("/");
          return;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [ID]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="templateMainDiv">
      <div className="content">
        <div className="player">
          <img
            style={{ backgroundColor: "white" }}
            src={
              opponentData?.photoURL ||
              "https://www.pngkey.com/png/full/204-2049354_box-icon-png.png"
            }
          />
          <div>
            <h6>{opponentData?.displayName || "Player 2"}</h6>
            <p>(1000)</p>
          </div>
        </div>
        <Online showEndScreen={showEndScreen} gameData={gameData} />
        <div className="player">
          <img
            style={{ backgroundColor: "white" }}
            src={
              user?.photoUrl ||
              "https://www.pngkey.com/png/full/204-2049354_box-icon-png.png"
            }
          />
          <div>
            <h6>{user?.displayName || "Player 1"}</h6>
            <p>(1000)</p>
          </div>
        </div>
      </div>
    </div>
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {endScreenData?.gameState || ""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {endScreenData?.message || ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            close
          </Button>
          <Button onClick={() => {handleClose(); navigate("/")}}>
            Home
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
