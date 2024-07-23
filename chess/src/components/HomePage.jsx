import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Board from "./Board";
import "../css/homePage.css"

export default function HomePage() {

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
  // friedLiverAttack: [
  //   {
  //     piece: "wp",
  //     from: 52,
  //     to: 36,
  //     captured: "",
  //   },
  //   {
  //     piece: "bp",
  //     from: 12,
  //     to: 28,
  //     captured: "",
  //   },
  //   {
  //     piece: "wn",
  //     from: 62,
  //     to: 46,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 57,
  //     to: 42,
  //     captured: "",
  //   },
  //   {
  //     piece: "wb",
  //     from: 61,
  //     to: 34,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 62,
  //     to: 45,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 59,
  //     to: 31,
  //     captured: "",
  //   },
  //   {
  //     piece: "bp",
  //     from: 28,
  //     to: 29,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 31,
  //     to: 13,
  //     captured: "bp",
  //   },
  //   {
  //     piece: "bn",
  //     from: 42,
  //     to: 27,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 13,
  //     to: 5,
  //     captured: "",
  //   },
  // ],
  // evansGambit: [
  //   {
  //     piece: "wp",
  //     from: 52,
  //     to: 36,
  //     captured: "",
  //   },
  //   {
  //     piece: "bp",
  //     from: 12,
  //     to: 28,
  //     captured: "",
  //   },
  //   {
  //     piece: "wb",
  //     from: 61,
  //     to: 34,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 1,
  //     to: 18,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 59,
  //     to: 31,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 6,
  //     to: 21,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 31,
  //     to: 13,
  //     captured: "bp",
  //   },
  //   {
  //     piece: "wq",
  //     from: 13,
  //     to: 5,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 18,
  //     to: 33,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 5,
  //     to: 1,
  //     captured: "",
  //   },
  // ],
  // kingsGambit: [
  //   {
  //     piece: "wp",
  //     from: 52,
  //     to: 36,
  //     captured: "",
  //   },
  //   {
  //     piece: "bp",
  //     from: 12,
  //     to: 28,
  //     captured: "",
  //   },
  //   {
  //     piece: "wp",
  //     from: 51,
  //     to: 35,
  //     captured: "",
  //   },
  //   {
  //     piece: "bp",
  //     from: 11,
  //     to: 27,
  //     captured: "",
  //   },
  //   {
  //     piece: "wb",
  //     from: 61,
  //     to: 34,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 2,
  //     to: 19,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 59,
  //     to: 31,
  //     captured: "",
  //   },
  //   {
  //     piece: "bn",
  //     from: 5,
  //     to: 21,
  //     captured: "",
  //   },
  //   {
  //     piece: "wq",
  //     from: 31,
  //     to: 13,
  //     captured: "bp",
  //   },
  //   {
  //     piece: "wq",
  //     from: 13,
  //     to: 1,
  //     captured: "",
  //   },
  // ],
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
        setScholarsMate(prev => []);
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
      setScholarsMate(pre => []);
    }
  }, [count]);

  useEffect(() => {
    console.log('gambitIndex: ', gambitIndex);
    console.log('Selected Gambit: ', keys[gambitIndex]);
  }, [gambitIndex]);

  return (
    <div
      className="row homepageOuterDiv"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center boardOuterDiv">
        <div className="noClickOverlay noMediaQuery" style={{position: "absolute", zIndex: "1"}}></div>
            <Board className="noMediaQuery" customMoveHistory={scholarsMate} muted />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 homepageMenu">
      <h1 style={{color: "white"}}>Play <span style={{color: "#739552"}}>Chess</span></h1>
        <div>
          <button onClick={() => {}} className="hompageButton playOnline">
            Play Online (Coming Soon)
          </button>
          <button onClick={() => navigate("/offline")} className="hompageButton playOffline">
            2-Player Offline
          </button>
        </div>
      </div>
    </div>
  );
}
