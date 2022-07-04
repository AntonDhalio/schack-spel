import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";
import { movePiece } from "./Game";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

const Board = () => {
  let activePiece = null;
  const [activePiece2, setActivePiece2] = useState();

  function selectPiece(e) {
    const tile = e.target;
    if (tile.className === "chessPiece") {
      e.preventDefault();
      console.log(e.target);
      activePiece = tile;
    }
  }

  /*  function selectPiece(e) {
    const tile = e.target;
    if (tile.className === "chessPiece") {
      const tile = e.target;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      tile.style.position = "absolute";
      tile.style.left = `${x}px`;
      tile.style.top = `${y}px`;
      console.log(tile);
    } else if (activePiece) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }
  } */

  /* function handleSquareClick(toX, toY){
    movePiece(toX, toY)
  } */

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
