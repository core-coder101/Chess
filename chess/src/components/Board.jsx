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

const newGame = {
  turn: "w",
}

const BoardMapper = ({ board, selectedPiece, setSelectedPiece, game }) => {
  return board.map((piece, index) => {
    const position = index + 1;
    if (piece && piece !== 'h' && piece !== 'c') {
      return (
        <div 
          key={position} 
          onClick={() => { 
            game.turn === piece.split("")[0] ? setSelectedPiece({ piece: piece, position: position }) : null 
          }} 
          className={`${piece} square-${position} piece ${selectedPiece.piece === piece && selectedPiece.position === position ? "selected-piece" : ""}`}
        ></div>
      );
    } else if (piece === 'h') {
      return <div key={position} className={`square-${position} possible-move`}></div>;
    } else if (piece === 'c') {
      return <div key={position} className={`square-${position} capturable`}></div>;
    } else {
      return null;
    }
  });
}

export default function Board() {
  const emptyPieceState = {
    piece: "",
    position: "",
  }

  const [selectedPiece, setSelectedPiece] = useState(emptyPieceState);
  const [board, setBoard] = useState(initialBoard);
  const [game, setGame] = useState(newGame);

  useEffect(() => {
    if (selectedPiece.piece && selectedPiece.position) {
      const handleClick = () => {
        setSelectedPiece(emptyPieceState);
        setBoard(prev => {
          return prev.map(square => {
            if(square === 'h' || square === 'c'){
              return ''
            } else {
              return square
            }
          })
        })
      }
      document.getElementById('board-grid').addEventListener('click', handleClick);
      return () => { document.getElementById('board-grid').removeEventListener('click', handleClick); }
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
                console.log("Capture move added");
                possibleMoves.push(index);
                setBoard(prevBoard => [
                  ...prevBoard.slice(0, index),
                  'c',
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
      }

      console.log('Possible Moves:', possibleMoves);
    }
  }, [selectedPiece]);

  return (
    <div className='board'>
      <div className='board-grid' id='board-grid'>
        <BoardMapper board={board} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} game={game} />
      </div>
    </div>
  )
}
