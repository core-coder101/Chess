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


const boardMapper = (board) => {
  return board.map((square, index) => {
    const position = index + 1
    if(square){
      return <div className={`${square} square-${position} piece`}></div>
    } else {
      return
    }
  })
}

export default function Board() {

  const [board, setBoard] = useState(initialBoard)

  return (
    <div className='board'>
      <div className='board-grid'>
        {boardMapper(board)}
        {/* <div className={`bp square-24 piece`}></div> */}
      </div>
    </div>
  )
}
