import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Board from "./Board";
import "../css/homePage.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useSelector } from "react-redux";
import { showPopup } from "../redux/slices/user";

export default function HomePage() {

  const { user } = useSelector(state => state.user)

  const GambitsToLoop = {
    scholarsMate: [
      {
        piece: "wp",
        from: 52,
        to: 36,
        captured: "",
      },
      {
        piece: "bp",
        from: 12,
        to: 28,
        captured: "",
      },
      {
        piece: "wb",
        from: 61,
        to: 34,
        captured: "",
      },
      {
        piece: "bn",
        from: 1,
        to: 18,
        captured: "",
      },
      {
        piece: "wq",
        from: 59,
        to: 31,
        captured: "",
      },
      {
        piece: "bn",
        from: 6,
        to: 21,
        captured: "",
      },
      {
        piece: "wq",
        from: 31,
        to: 13,
        captured: "bp",
      },
    ],
  };

  const [scholarsMate, setScholarsMate] = useState([]);
  const [count, setCount] = useState(0);
  const [gambitIndex, setGambitIndex] = useState(0);

  const navigate = useNavigate();
  const keys = Object.keys(GambitsToLoop);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < GambitsToLoop[keys[gambitIndex]].length) {
        setCount((prev) => prev + 1);
      } else {
        setScholarsMate([]);
        setCount(0);
        setGambitIndex(Math.floor(Math.random() * keys.length));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (count < GambitsToLoop[keys[gambitIndex]].length) {
      setScholarsMate((prev) => [
        ...prev,
        GambitsToLoop[keys[gambitIndex]][count],
      ]);
    } else {
      setScholarsMate((pre) => []);
    }
  }, [count]);

  const handleLogout = async () => {
    try {
      await signOut(auth)
      showPopup("Logged Out")
    } catch (error) {
      showPopup("Error Logging Out")
      console.error("Error Logging Out: ", error);
    }
  }

  return (
    <>
      {user ? <div className="logoutButton" onClick={handleLogout}>Log Out</div> : null}
      <div
        className="row homepageOuterDiv"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center boardOuterDiv">
          <div
            className="noClickOverlay noMediaQuery"
            style={{ position: "absolute", zIndex: "1" }}
          ></div>
          <Board
            className="noMediaQuery"
            customMoveHistory={scholarsMate}
            muted
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 homepageMenu">
          <h1 style={{ color: "white" }}>
            Play <span style={{ color: "#739552" }}>Chess</span>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
            }}
          >
            <button
              onClick={() => navigate("/queue")}
              className="hompageButton playOnline"
            >
              Play Online
            </button>
            <button
              onClick={() => navigate("/offline")}
              className="hompageButton playOffline"
            >
              2-Player Offline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
