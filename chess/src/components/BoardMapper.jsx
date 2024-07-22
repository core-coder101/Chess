import React from 'react'

export default function BoardMapper ({ board, selectedPiece, setSelectedPiece, turn }) {
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