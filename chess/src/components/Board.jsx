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

const boardForBishopTest = [
  '', '', '', '', '', '', '', '',
  '', '', '', 'bb', 'bb', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', 'wb', 'wb', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
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
      const pos = position - 1; // Convert to 0-based index

      if (color === 'w') {
        switch (type) {
          case 'p':
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

      // universal pieces
      let updated = board
      switch(true){
        case (type === 'r' || type === 'q'):
          let i = pos

          // to search down
          let pieceBelow = false
          for(let x = i + 8; x <= 64; x += 8){
            if(pieceBelow){
              break
            }
            if(board[x] != ""){
              pieceBelow = true
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`
              }
            } else {
              updated[x] = 'h'
            }
          }

          // to search up
          let pieceAbove = false
          for(let x = i - 8; x > 0; x -= 8){
            if(pieceAbove){
              break
            }
            if(board[x] != ""){
              pieceAbove = true
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`
              }
            } else {
              updated[x] = 'h'
            }
          }

          // to search right
          let pieceRight = false
          for(let x = i + 1; (x % 8) !== 0; x += 1){
            if(pieceRight){
              break
            }
            if(board[x] != ""){
              pieceRight = true
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`
              }
            } else {
              updated[x] = 'h'
            }
          }

          // to search left
          let pieceLeft = false
          for(let x = i - 1; (x % 8) !== 7 && x >= 0; x -= 1){
            if(pieceLeft){
              break
            }
            if(board[x] != ""){
              pieceLeft = true
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`
              }
            } else {
              updated[x] = 'h'
            }
          }
          let newArr = Array.from(updated);
          setBoard(newArr);
          break
        case (type === 'b' || type === 'q'):

          // to search bottom right
          let pieceBottomRight = false;
          for(let x = pos + 9; x < 64 && (x % 8 !== 0); x += 9){
            if(pieceBottomRight){
              break;
            }
            if(board[x] !== ""){
              pieceBottomRight = true;
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`;
              }
            } else {
              updated[x] = 'h';
            }
          }
        
          // to search top left
          let pieceTopLeft = false;
          for(let x = pos - 9; x >= 0 && (x % 8 !== 7); x -= 9){
            if(pieceTopLeft){
              break;
            }
            if(board[x] !== ""){
              pieceTopLeft = true;
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`;
              }
            } else {
              updated[x] = 'h';
            }
          }
        
          // to search bottom left
          let pieceBottomLeft = false;
          for(let x = pos + 7; x < 64 && (x % 8 !== 7); x += 7){
            if(pieceBottomLeft){
              break;
            }
            if(board[x] !== ""){
              pieceBottomLeft = true;
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`;
              }
            } else {
              updated[x] = 'h';
            }
          }
        
          // to search top right
          let pieceTopRight = false;
          for(let x = pos - 7; x >= 0 && (x % 8 !== 0); x -= 7){
            if(pieceTopRight){
              break;
            }
            if(board[x] !== ""){
              pieceTopRight = true;
              if(board[x].charAt(0) !== color){
                possibleMoves.push(x);
                updated[x] = `${updated[x]}c`;
              }
            } else {
              updated[x] = 'h';
            }
          }
        
          let newArr2 = Array.from(updated);
          setBoard(newArr2);
          break;
        case (type === 'k'):
          captureSearchIndexes = [pos + 7, pos - 7, pos + 8, pos - 8, pos + 9, pos - 9, pos + 1, pos - 1]
          captureSearchIndexes.map(index => {
            if(index >= 0 && index < 64){
              if(updated[index] === ""){
                updated[index] = "h"
              } else if(updated[index].charAt(0) !== color) {
                updated[index] = `${updated[index]}c`
              }
            }
          })
          let newArr3 = Array.from(updated);
          setBoard(newArr3);
          break

      }
    }
  }, [selectedPiece]);



  const getBoardFromHistory = (history) => {
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