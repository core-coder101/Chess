import React, { useEffect, useState } from 'react';
import '../board.less';

const initialBoard = [
  'br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br',
  'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 
  '',    '',   '',   '',   '',   '',   '',   '',
  '',    '',   '',   '',   '',   '',   '',   '',
  '',    '',   '',   '',   '',   '',   '',   '',
  '',    '',   '',   '',   '',   '',   '',   '',
  'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp',
  'wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr',
];
const checkMateTesting = [
  'br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br',
  'bp', 'bp', 'bp', 'bp', '', 'bp', 'bp', 'bp', 
  '',    '',   '',   '',   '',   '',   '',   '',
  '',    '',   '',   '',   'bp',   '',   '',   'wq',
  '',    '',   'wb',   '',   'wp',   '',   '',   '',
  '',    '',   '',   '',   '',   '',   '',   '',
  'wp', 'wp', 'wp', 'wp', '', 'wp', 'wp', 'wp',
  'wr', 'wn', 'wb', '', 'wk', '', 'wn', 'wr',
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

const capture = new Audio('/assets/audio/capture.mp3');
const castle = new Audio('/assets/audio/castle.mp3');
const check = new Audio('/assets/audio/check.mp3');
const checkMate = new Audio('/assets/audio/checkMate.mp3');
const gameOver = new Audio('/assets/audio/gameOver.mp3');
const gameStart = new Audio('/assets/audio/gameStart.mp3');
const moveAudio = new Audio('/assets/audio/move.mp3');
const stalemate = new Audio('/assets/audio/stalemate.mp3');

export default function Board() {
  const emptyPieceState = {
    piece: "",
    position: "",
  }

  const [selectedPiece, setSelectedPiece] = useState(emptyPieceState);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState(true);
  const [moveHistory, setMoveHistory] = useState([]); // State for move history
  const [checked, setChecked] = useState(false)
  const [legalMoves, setLegalMoves] = useState([])

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
        captured: (board[moveIndex] !== "" && board[moveIndex] !== "h") ? board[moveIndex].split("")[0]+board[moveIndex].split("")[1] : ""
      }
    ]);
    setSelectedPiece(emptyPieceState)

  }

  useEffect(() => {
    gameStart.play()
  }, [])

  const calculatePossibleMoves = (localBoard, color, type, pos) => {
    const position = pos + 1
    // const position = selectedPiece.position;
    let possibleMoves = [];
    let nonCapturingMoves = [] // only pawns do that ig
    let searchIndexes = [];
    let captureSearchIndexes = [];
    // const pos = position - 1; // Convert to 0-based index

    if (color === 'w') {
      if(type === 'p'){
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
            if (index >= 0 && localBoard[index] === "" && !pieceIsInFront) {
              nonCapturingMoves.push(index);
            } else {
              pieceIsInFront = true;
            }
          });
          captureSearchIndexes.forEach(index => {
            if (index >= 0 && localBoard[index] !== "" && localBoard[index].charAt(0) !== color) {
              possibleMoves.push(index);
            }
          });
      }
    } else {
      if(type === 'p'){
          const pos = position - 1; // Convert to 0-based index
          if (pos >= 8 && pos <= 15) { // First row for pawns
            searchIndexes = [pos + 8, pos + 16]; // Forward move and double move
            captureSearchIndexes = [pos + 7, pos + 9]; // Diagonal captures
          } else {
            searchIndexes = [pos + 8]; // Regular move
            captureSearchIndexes = [pos + 7, pos + 9]; // Diagonal captures
          }
          // Edge cases for captures
          if ((pos % 8) === 0) { // Right edge
            captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos + 7);
          }
          if ((pos % 8) === 1) { // Left edge
            captureSearchIndexes = captureSearchIndexes.filter(idx => idx !== pos + 9);
          }
          let pieceIsInFront = false;
          searchIndexes.forEach(index => {
            if (index >= 0 && localBoard[index] === "" && !pieceIsInFront) {
              nonCapturingMoves.push(index);
            } else {
              pieceIsInFront = true;
            }
          });
          captureSearchIndexes.forEach(index => {
            if (index >= 0 && localBoard[index] !== "" && localBoard[index].charAt(0) !== color) {
              possibleMoves.push(index);
            }
          });
      }
    }

    // universal pieces
    // switch was giving me a lot of trouble so we're back to if statements
    if ((type === 'r' || type === 'q')){
      let i = pos

      // to search down
      let pieceBelow = false
      for(let x = i + 8; x < 64; x += 8){
        if(pieceBelow){
          break
        }
        if(localBoard[x] != ""){
          pieceBelow = true
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }

      // to search up
      let pieceAbove = false
      for(let x = i - 8; x >= 0; x -= 8){
        if(pieceAbove){
          break
        }
        if(localBoard[x] != ""){
          pieceAbove = true
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }

      // to search right
      let pieceRight = false
      for(let x = i + 1; (x % 8) !== 0; x += 1){
        if(pieceRight){
          break
        }
        if(localBoard[x] != ""){
          pieceRight = true
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }

      // to search left
      let pieceLeft = false
      for(let x = i - 1; (x % 8) !== 7 && x >= 0; x -= 1){
        if(pieceLeft){
          break
        }
        if(localBoard[x] != ""){
          pieceLeft = true
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }
    }
    if((type === 'b' || type === 'q')){

      // to search bottom right
      let pieceBottomRight = false;
      for(let x = pos + 9; x < 64 && (x % 8 !== 0); x += 9){
        if(pieceBottomRight){
          break;
        }
        if(localBoard[x] !== ""){
          pieceBottomRight = true;
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }
    
      // to search top left
      let pieceTopLeft = false;
      for(let x = pos - 9; x >= 0 && (x % 8 !== 7); x -= 9){
        if(pieceTopLeft){
          break;
        }
        if(localBoard[x] !== ""){
          pieceTopLeft = true;
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }
    
      // to search bottom left
      let pieceBottomLeft = false;
      for(let x = pos + 7; x < 64 && (x % 8 !== 7); x += 7){
        if(pieceBottomLeft){
          break;
        }
        if(localBoard[x] !== ""){
          pieceBottomLeft = true;
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }
    
      // to search top right
      let pieceTopRight = false;
      for(let x = pos - 7; x >= 0 && (x % 8 !== 0); x -= 7){
        if(pieceTopRight){
          break;
        }
        if(localBoard[x] !== ""){
          pieceTopRight = true;
          if(localBoard[x].charAt(0) !== color){
            possibleMoves.push(x);
          }
        } else {
          possibleMoves.push(x);
        }
      }
    }
    if(type === 'k'){
      captureSearchIndexes = [pos + 7, pos - 7, pos + 8, pos - 8, pos + 9, pos - 9, pos + 1, pos - 1]
      captureSearchIndexes.map(index => {
        if(index >= 0 && index < 64){
          if(localBoard[index] === ""){
            possibleMoves.push(index);
          } else if(localBoard[index].charAt(0) !== color) {
            possibleMoves.push(index);
          }
        }
      })
    }
    if(type === 'n'){
      const topRight = pos - 15
      const topLeft = pos - 17
      const bottomRight = pos + 17
      const bottomLeft = pos + 15
      const leftTop = pos - 10
      const leftBottom = pos + 6
      const rightTop = pos - 6
      const rightBottom = pos + 10

      const distanceFromRight = ( ( (position % 8) ? (position % 8) : 8 ) - 8 ) * -1
      const distanceFromLeft = (position % 8 ? position % 8 : 8) - 1
      const distanceFromTop = Math.floor(position / 8)
      const distanceFromBottom = Math.floor((64 - position) / 8)

        // im just gonna go one-by-one and define conditions for each of the possible move
        // later we will know what condiitions are in common and merge them ig

        const setPossibleMove = (index) => {
          possibleMoves.push(topRight)
          if(localBoard[index] === ""){
            possibleMoves.push(index);
          } else if(localBoard[index].charAt(0) !== color) {
            possibleMoves.push(index);
          }
        }
        
      if(distanceFromRight > 0 && distanceFromTop > 1){
        setPossibleMove(topRight)
      }

      if(distanceFromRight > 1 && distanceFromTop > 0){
        setPossibleMove(rightTop)
      }

      if(distanceFromRight > 1 && distanceFromBottom > 0){
        setPossibleMove(rightBottom)
      }

      if(distanceFromBottom > 1 && distanceFromRight > 0){
        setPossibleMove(bottomRight)
      }

      if(distanceFromBottom > 1 && distanceFromLeft > 0){
        setPossibleMove(bottomLeft)
      }

      if(distanceFromLeft > 1 && distanceFromBottom > 0){
        setPossibleMove(leftBottom)
      }

      if(distanceFromLeft > 1 && distanceFromTop > 0){
        setPossibleMove(leftTop)
      }

      if(distanceFromTop > 1 && distanceFromLeft > 0){
        setPossibleMove(topLeft)
      }
    }

    return [
    (possibleMoves.filter(move => {
      return (move >= 0 && move < 64);
    })),
    (nonCapturingMoves.filter(move => {
      return (move >= 0 && move < 64);
    }))]
  }

  const highlightSquares = (possibleMoves) => {
    let updated = board
    possibleMoves.forEach(moveIndex => {
      if(!(moveIndex >= 0 && moveIndex < 64)){
        return
      }
      let opponentColor = (turn ? 'b' : 'w')
      if(updated[moveIndex] !== ""){
        if(updated[moveIndex].charAt(0) === opponentColor){
          updated[moveIndex] = `${updated[moveIndex]}c`
        }
      } else {
        updated[moveIndex] = "h"
      }
      
      let newArr = Array.from(updated)
      setBoard(newArr)
    })
  }

  const checkForCheck = (localBoard ) => {
    const opponentColor = (turn ? 'b' : 'w')
    const color = (turn ? 'w' : 'b')
    const kingIndex = localBoard.findIndex((piece) => (piece?.charAt(0) === color && piece.charAt(1) === 'k'))
    let localChecked = false
    localBoard.forEach((piece, index) => {
      if(piece === "" || localChecked){
        return
      }
      if(piece.charAt(0) === opponentColor){
        const type = piece.charAt(1);
        let [possibleMoves] = calculatePossibleMoves(localBoard, opponentColor, type, index)
        if(possibleMoves.includes(kingIndex)){
          localChecked = true
          return
        }
      } else {
        return
      }
    })
    return localChecked
  }

  const simulateMove = (pieceIndex, moveIndex) => {
    let currentBoard = [...board]
    // I'm gonna clean out the board as well, just in case some useless thing was left in there
    currentBoard =  currentBoard.map(square => {
      if(square === ""){
        return square
      }
      const splitted = square.split("")
      if(splitted.includes("h")){
        return ''
      } else if(splitted.includes("c")) {
        return `${splitted[0]}${splitted[1]}`
      } else {
        return square
      }
    })
    let piece = currentBoard[pieceIndex]
    currentBoard[pieceIndex] = "";
    currentBoard[moveIndex] = piece;
    let inCheck = checkForCheck(currentBoard);

    return inCheck
  }

  const legalMovesUnderCheck = () => {
    const color = (turn ? 'w' : 'b')
    let legalMoves = []
    board.forEach((piece, index) => {
      if(piece === ""){
        return
      }
      if(piece.charAt(0) === color){
        const type = piece.charAt(1);
        let [possibleMoves, nonCapturingMoves] = calculatePossibleMoves(board, color, type, index)
        // now i map possibleMoves and check if any of these moves will remove the king from being checked and push it to legalMoves i guess?
        let temp = [...possibleMoves, ...nonCapturingMoves]
        temp.forEach(moveIndex => {
          if(!(moveIndex >= 0 && moveIndex < 64)){
            return
          }
          let inCheck = simulateMove(index, moveIndex)
          if(!inCheck){
            legalMoves.push({moveIndex, piece, index})
          }
        })
      } else {
        return
      }
    })

    return legalMoves
  }

  useEffect(()=> {
    // Each time a move is made, we check for checks, checkmates, stalemates, etc.
    const localChecked = checkForCheck(board)
    setChecked(localChecked)
    const localLegalMoves = legalMovesUnderCheck() 
    setLegalMoves(localLegalMoves)
    if(!(localLegalMoves.length > 0) && localChecked === true){
      checkMate.play()
    } else if(!(localLegalMoves.length > 0) && localChecked === false){
      stalemate.play()
    } else if (localLegalMoves.length > 0 && localChecked === true) {
      check.play()
    } else if (localLegalMoves.length > 0 && localChecked === false){
      // either a capture or a regular move. . . 
      if(moveHistory.length > 0){
        if(moveHistory[moveHistory.length - 1].captured){
          capture.play()
        } else {
          moveAudio.play()
        }
      }
    }
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
      const position = selectedPiece.position
        let [possibleMoves, nonCapturingMoves] = calculatePossibleMoves(board, color, type, (position - 1))
        let tempArr = [...possibleMoves, ...nonCapturingMoves].filter(moveIndex => {
          return (legalMoves.filter(move => {
            return (move.piece === selectedPiece.piece && move.index === (position - 1) && move.moveIndex === moveIndex)
          }).length > 0)
        })
        highlightSquares(tempArr)
      }
  }, [selectedPiece]);

  const getBoardFromHistory = (history) => {
    let boardToSend = initialBoard
    let capturedPieces = []
    if(!history.length > 0){
      return { boardToSend, capturedPieces }
    }

    history.forEach((move) => {
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
    setTurn(prev => !prev) // inversing the turn AFTER we update board
  }, [moveHistory])



  return (
    <div className={'board ' + (checked ? 'check-' + (turn ? "w" : "b") + "k" : "")}> {/* 'rotate' class is working now, */}
      <div className='board-grid' id='board-grid'>
        <BoardMapper board={board} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} turn={turn} />
      </div>
    </div>
  )
}