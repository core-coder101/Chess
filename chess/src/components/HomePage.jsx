import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Board from "./Board";

export default function HomePage() {
  const [scholarsMate, setScholarsMate] = useState([]);
  const [count, setCount] = useState(0);
  const scholarsMateMoveSequence = [
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
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < scholarsMateMoveSequence.length) {
        setCount((prev) => prev + 1);
      } else {
        setScholarsMate([]);
        setCount(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (count < scholarsMateMoveSequence.length) {
      setScholarsMate((prev) => {
        return [...prev, scholarsMateMoveSequence[count]];
      });
    } else {
      setScholarsMate([]);
    }
  }, [count]);

  return (
    <div
      className="d-flex align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="col-6 d-flex align-items-center justify-content-center" style={{ height: "50%", position: "relative" }}>
        <div className="noClickOverlay" style={{position: "absolute", zIndex: "1"}}></div>
            <Board customMoveHistory={scholarsMate} muted />
      </div>
      <div className="col-6 d-flex align-items-center justify-content-center">
        <Link to="/play" style={{ color: "white" }}>
          Play
        </Link>
      </div>
    </div>
  );
}
