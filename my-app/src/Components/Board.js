import React, { useState, useEffect } from "react";
import "./Board.css";
import Square from "./Square";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

let clickedPiece = null;
let lastColor = null;

const tileChangeBack = () => {
  if (clickedPiece) {
    clickedPiece.style.backgroundColor = lastColor;
  }
};

const Board = () => {
  const [activePiece, setActivePiece] = useState({
    class: null,
    id: null,
    src: null,
    alt: null,
  });
  const [targetTile, setTargetTile] = useState(null);

  // lägg till if(clickedpiece) som en useEffect

  const selectPiece = (e) => {
    const tile = e.target;
    lastColor = tile.style.backgroundColor;
    tileChangeBack();
    // useEffect(() => {
    //   tileChangeBack();
    // });
    e.preventDefault();
    setActivePiece({
      class: tile.className,
      id: tile.id,
      src: tile.src,
      alt: tile.alt,
    });
    clickedPiece = tile;
    clickedPiece.style.backgroundColor = "green";
    console.log(activePiece);
  };

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
          onClick={selectPiece}
        />
      );
    }
  }

  return <div className="board">{board}</div>;
};

export default Board;
