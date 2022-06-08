import React from 'react'
import './Board.css'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Board = () => {

  let board = [];
  
  for (let j = verticalAxis.length-1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++){  
      
      const squareNumber = j + i;
      const squareId = horizontalAxis[i] + verticalAxis[j];
      if(squareNumber % 2 === 0) {
        board.push(
          <div className='whiteSquare' id={squareId}></div>      
        )
      }
      else{
        board.push(
          <div className='blackSquare' id={squareId}></div>      
        )
      }   
  }
}
  return (
    <div className="board">{board}</div>
  )
}



export default Board