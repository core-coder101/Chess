import React, { useState } from 'react'
import "../assets/css/board.css"

// const initialBoard = [
//   'br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br',
//   'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 
//   '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', 
//   'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp',
//   'wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr',
// ]

const initialBoard = [
  'br', 'bp', '', '', '', '', 'wp', 'wr',
  'bn', 'bp', '', '', '', '', 'wp', 'wn',
  'bb', 'bp', '', '', '', '', 'wp', 'wb',
  'bq', 'bp', '', '', '', '', 'wp', 'wq',
  'bk', 'bp', '', '', '', '', 'wp', 'wk',
  'bb', 'bp', '', '', '', '', 'wp', 'wb',
  'bn', 'bp', '', '', '', '', 'wp', 'wn',
  'br', 'bp', '', '', '', '', 'wp', 'wr'
];


const BoardMapper = ({board, selectedPiece, setSelectedPiece}) => {
  return board.map((piece, index) => {
    const position = index + 1
    if(piece){
      return <div onClick={() => {setSelectedPiece({piece: piece, position: position})}} className={`${piece} square-${position} piece ${(selectedPiece.piece === piece && selectedPiece.position === position) ? "selected-piece" : "" }`}></div>
    } else {
      return
    }
  })
}

export default function Board() {

  const [selectedPiece, setSelectedPiece] = useState({
    piece: "",
    position: "",
  })
  const [board, setBoard] = useState(initialBoard)

  return (
    <div className='board'>
      <div className='board-grid'>
        {/* {BoardMapper(board, selectPiece, unSelectPiece)} */}
        <BoardMapper board={board} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} />
        {/* <div className={`bp square-24 piece`}></div> */}
      </div>
    </div>
  )
}
