import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Board = () => {
  let activePiece = null;
  const [activePiece2, setActivePiece2] = useState();

  function selectPiece(e) {
    const tile = e.target;
    e.preventDefault();
    console.log(e.target);
    activePiece = tile;
  }

  let board = [];

  for (var i = verticalAxis.length - 1; i >= 0; i--) {
    for (var j = 0; j < horizontalAxis.length; j++) {
      const squareNumber = j + i - 1;
      const squareId = horizontalAxis[j] + verticalAxis[i];

      board.push(
        <Square
          key={squareId}
          id={squareId}
          squareNumber={squareNumber}
          squareId={squareId}
        />
      );
    }
  }

  return (
    <div className="board" onClick={selectPiece}>
      {board}
    </div>
  );
};

export default Board;
