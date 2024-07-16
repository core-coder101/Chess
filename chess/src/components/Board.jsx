import React, { useEffect, useState } from 'react';
import "../assets/css/board.css";

const initialBoard = [
  'br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br',
  'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp',
  'wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr',
];

const BoardMapper = ({ board, selectedPiece, setSelectedPiece, turn }) => {
  return board.map((piece, index) => {
    const position = index + 1;
    const splitted = piece.split("")
    let pieceColor = splitted[0] === "w" ? true : false
    if (piece && piece !== "h" && splitted.length > 0 && splitted.length < 3) {
      // true => white, false => black
      return (
        <div 
          key={position} 
          onClick={() => { 
            turn === pieceColor ? setSelectedPiece({ piece: piece, position: position }) : null 
          }}
          className={`${piece} square-${position} piece ${selectedPiece.piece === piece && selectedPiece.position === position ? "selected-piece" : ""}`}
        ></div>
      );
    } else if (piece === "h") {
      return <div 
          key={position} 
          onClick={() => { 
            turn === pieceColor ? setSelectedPiece({ piece: piece, position: position }) : null 
          }}
          className={`square-${position} possible-move`}
        ></div>
    } else if (splitted[2] === 'c') {
      let pieceStr = `${splitted[0]}${splitted[1]}`
      return <div 
          key={position} 
          className={`${pieceStr} square-${position} piece capturable ${selectedPiece.piece === pieceStr && selectedPiece.position === position ? "selected-piece" : ""}`}
        ></div>
    } else {
      return null;
    }
  });
}

const exampleHistory = [
  {
      "piece": "wp",
      "from": 53,
      "to": 37,
      "captured": null
  },
  {
      "piece": "bp",
      "from": 14,
      "to": 30,
      "captured": null
  },
  {
      "piece": "wp",
      "from": 37,
      "to": 30,
      "captured": "bp"
  }
]

export default function Board() {
  const emptyPieceState = {
    piece: "",
    position: "",
  }

  const [selectedPiece, setSelectedPiece] = useState(emptyPieceState);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(true);
  const [moveHistory, setMoveHistory] = useState([]); // State for move history

  const move = (squareClass) => {
    const movePosition = parseInt(squareClass.split('-')[1])
    const moveIndex = movePosition - 1

    // Update the move history
    setMoveHistory(prevHistory => [
      ...prevHistory,
      {
        piece: selectedPiece.piece,
        from: selectedPiece.position - 1,
        to: moveIndex,
        captured: board[moveIndex] !== "" ? board[moveIndex] : null
      }
    ]);

    // Update the state and clear selected piece + switch the turns
    // setBoard(prev => {
    //   return [
    //     ...prev.slice(0, selectedPiece.position - 1),
    //     "",
    //     ...prev.slice(selectedPiece.position),
    //   ]
    // })
    // setBoard(prev => {
    //   return [
    //     ...prev.slice(0, moveIndex),
    //     selectedPiece.piece,
    //     ...prev.slice(moveIndex + 1),
    //   ]
    // })
    setTurn(prev => !prev)
    setSelectedPiece(emptyPieceState)
  }

  const capture = (squareClass) => {
    // Capture logic if needed
  }

  useEffect(()=> {
    // Each time a move is made, we check for checks, checkmates, stalemates, etc.
  }, [turn])

  useEffect(() => {
    if (selectedPiece.piece && selectedPiece.position) {
      const handleClick = (e) => {
        const arr = Array.from(e.target.classList)
        if(e.target.classList.contains("possible-move")){
          move(arr[0])
        } else if (e.target.classList.contains("capturable")) {
          move(arr[1])
        } else {
          setSelectedPiece(emptyPieceState);
          setBoard(prev => {
            return prev.map(square => {
              const splitted = square.split("")
              if(splitted.includes("h")){
                return ''
              } else if(splitted.includes("c")) {
                return `${splitted[0]}${splitted[1]}`
              } else {
                return square
              }
            })
          })
        }}
      document.getElementById('board-grid').addEventListener('click', handleClick)
      return () => { document.getElementById('board-grid').removeEventListener('click', handleClick)}
    } else {
      setBoard(prev => {
        return prev.map(square => {
          const splitted = square.split("")
          if(splitted.includes("h")){
            return ''
          } else if(splitted.includes("c")) {
            return `${splitted[0]}${splitted[1]}`
          } else {
            return square
          }
        })
      })
    }
  }, [selectedPiece]);

  useEffect(() => {
    if (selectedPiece.piece && selectedPiece.position) {
      const [color, type] = selectedPiece.piece.split('');
      const position = selectedPiece.position;
      let possibleMoves = [];
      let searchIndexes = [];
      let captureSearchIndexes = [];

      if (color === 'w') {
        switch (type) {
          case 'p':
            const pos = position - 1; // Convert to 0-based index
            if (pos >= 48 && pos <= 55) { // First row for pawns
              searchIndexes = [pos - 8, pos - 16]; // Forward move and double move
              captureSearchIndexes = [pos - 7, pos - 9]; // Diagonal captures
            } else {
              searchIndexes = [pos - 8]; // Regular move
              captureSearchIndexes = [pos - 7, pos - 9]; // Diagonal captures
            }
            // Edge cases for captures
            if ((pos % 8) === 0) { // Right edge
              captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos - 9);
            }
            if ((pos % 8) === 1) { // Left edge
              captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos - 7);
            }
            let pieceIsInFront = false;
            searchIndexes.forEach(index => {
              if (index >= 0 && board[index] === "" && !pieceIsInFront) {
                possibleMoves.push(index);
                setBoard(prevBoard => [
                  ...prevBoard.slice(0, index),
                  'h',
                  ...prevBoard.slice(index + 1)
                ]);
              } else {
                pieceIsInFront = true;
              }
            });
            captureSearchIndexes.forEach(index => {
              if (index >= 0 && board[index] !== "" && board[index].charAt(0) !== color) {
                possibleMoves.push(index);
                setBoard(prevBoard => [
                  ...prevBoard.slice(0, index),
                  `${prevBoard[index]}c`,
                  ...prevBoard.slice(index + 1)
                ]);
              }
            });
            break;
          // Add logic for other pieces as needed
          default:
            break;
        }
      } else {
        // Logic for black pieces can be added here
        switch (type) {
          case 'p':
            const pos = position - 1; // Convert to 0-based index
            if (pos >= 9 && pos <= 16) { // First row for pawns
              searchIndexes = [pos + 8, pos + 16]; // Forward move and double move
              captureSearchIndexes = [pos + 7, pos + 9]; // Diagonal captures
            } else {
              searchIndexes = [pos + 8]; // Regular move
              captureSearchIndexes = [pos + 7, pos + 9]; // Diagonal captures
            }
            // Edge cases for captures
            if ((pos % 8) === 0) { // Right edge
              captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos + 9);
            }
            if ((pos % 8) === 1) { // Left edge
              captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos + 7);
            }
            let pieceIsInFront = false;
            searchIndexes.forEach(index => {
              if (index >= 0 && board[index] === "" && !pieceIsInFront) {
                possibleMoves.push(index);
                setBoard(prevBoard => [
                  ...prevBoard.slice(0, index),
                  'h',
                  ...prevBoard.slice(index + 1)
                ]);
              } else {
                pieceIsInFront = true;
              }
            });
            captureSearchIndexes.forEach(index => {
              if (index >= 0 && board[index] !== "" && board[index].charAt(0) !== color) {
                possibleMoves.push(index);
                setBoard(prevBoard => [
                  ...prevBoard.slice(0, index),
                  `${prevBoard[index]}c`,
                  ...prevBoard.slice(index + 1)
                ]);
              }
            });
            break;
          // Add logic for other pieces as needed
          default:
            break;
        }
      }
    }
  }, [selectedPiece]);



  const   getBoardFromHistory = (history) => {
    let boardToSend = initialBoard
    let capturedPieces = []
    if(!history.length > 0){
      return { boardToSend, capturedPieces }
    }

    history.forEach((move, i) => {
      boardToSend[move.from] = ""
      boardToSend[move.to] = move.piece
      if(move.captured){
        capturedPieces.push(move.captured)
      }
    })

    return { boardToSend, capturedPieces }

  }



  useEffect(() => {
    const { boardToSend, capturedPieces } = getBoardFromHistory(moveHistory)
    const newArr = Array.from(boardToSend)
    setBoard(newArr)
  }, [moveHistory])



  return (
    <div className='board'>
      <div className='board-grid' id='board-grid'>
        <BoardMapper board={board} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} turn={turn} />
      </div>
    </div>
  )
}