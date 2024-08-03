import React, { useState } from "react";
import Board from "./Board";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const baseAssetPath = import.meta.env.VITE_ASSET_PATH

export default function OfflineTemplate() {
  let user = null;
  let opponentData = null;
  const navigate = useNavigate()
  const [endScreenData, setEndScreenData] = useState({
    gameState: "",
    message: "",
  })

  const showEndScreen = (name) => {
    if (name === "white") {
      setEndScreenData({
        gameState: "Game Over",
        message: "Player 1 (white) won by checkmate",
      })
      setOpen(true)
    } else if (name === "black") {
      setEndScreenData({
        gameState: "Game Over",
        message: "Player 2 (black) won by checkmate",
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

  const [open, setOpen] = useState(false);
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
                (baseAssetPath + "assets/img/defaultImg.png")
              }
            />
            <div>
              <h6>{opponentData?.displayName || "Player 2"}</h6>
              <p>(1000)</p>
            </div>
          </div>
          <Board showEndScreen={showEndScreen} />
          <div className="player">
            <img
              style={{ backgroundColor: "white" }}
              src={
                user?.photoUrl ||
                (baseAssetPath + "assets/img/defaultImg.png")
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
          <Button onClick={() => {handleClose(); window.location.reload();}}>
            Play Again?
          </Button>
          <Button onClick={() => {handleClose(); navigate("/")}}>
            Home
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
