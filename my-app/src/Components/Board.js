import React from 'react'
import './Board.css'
import Square from './Square';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Board = () => {

  let board = [];
  
  for (let j = verticalAxis.length-1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++){  
      
      const squareNumber = j + i;
      const squareId = horizontalAxis[i] + verticalAxis[j];
      
      board.push(
      <Square squareNumber={squareNumber} squareId={squareId}/>
      )
  }
}
  return (
    <div className="board">{board}</div>
  )
}

export default Board