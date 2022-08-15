import React, { useState, useEffect } from "react";
import "./Board.css";
import Square from "./Square";
import { getStartingPositions } from "./PieceInfo";
import Game, { availablePaths } from "./Game";

const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

let clickedPiece = null;
let lastSquareColor = null;
let shouldRemove = null;
// lägg till if(clickedpiece) som en useEffect
// useEffect(() => {
//   tileChangeBack();
// });

const tileChangeBack = () => {
  if (clickedPiece) {
    clickedPiece.style.backgroundColor = lastSquareColor;
  }
};

const changePlayer = (boardState, activePiece) => {
  let piece = boardState[activePiece];
  if (piece.color === "white") {
    return true;
  }
  return false;
};

const isCorrectColor = (playerTurn, pieceColor) => {
  if (playerTurn === "white" && pieceColor === "white") {
    return true;
  } else if (playerTurn === "black" && pieceColor === "black") {
    return true;
  } else {
    return false;
  }
};

const getVector = (x, y) => {
  class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const vector = new Vector2(x, y);
  return vector;
};

const initialState = getStartingPositions();

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [boardState, setBoardState] = useState(initialState);
  const [isInitialBoard, setIsInitialBoard] = useState(true);
  const [playerTurn, setPlayerTurn] = useState("white");

  let board = [];
  let dict = [];

  class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const selectPiece = (e) => {
    const tile = e.target;

    if (tile.className.includes("Square") && activePiece) {
      shouldRemove = false;
      changePosition(tile);
    } else if (tile.src) {
      lastSquareColor = tile.style.backgroundColor;
      const pieceColor = boardState[tile.id].color;
      if (isCorrectColor(playerTurn, pieceColor)) {
        tileChangeBack();
        setActivePiece(tile.id);
        clickedPiece = tile;
        clickedPiece.style.backgroundColor = "green";
        setIsInitialBoard(false);
        var test = availablePaths(
          boardState[tile.id].position,
          boardState,
          pieceColor,
          tile.className
        );
        console.log(test);
      } else if (
        !isCorrectColor(playerTurn, pieceColor) &&
        activePiece !== tile.id &&
        activePiece !== null
      ) {
        shouldRemove = true;
        changePosition(tile);
      }
    }
  };

  const changePosition = (tile) => {
    let copyPiece = boardState[activePiece];
    !tile.className.includes("Square")
      ? (copyPiece.position = boardState[tile.id].position)
      : (copyPiece.position = tile.id);
    if (shouldRemove) {
      removePiece(tile);
    }
    setBoardState((prevBoardState) => ({
      ...prevBoardState,
      copyPiece,
    }));
    setActivePiece(null);
    changePlayer(boardState, activePiece)
      ? setPlayerTurn("black")
      : setPlayerTurn("white");
  };

  const removePiece = (tile) => {
    let copyBoardState = boardState;
    delete copyBoardState[tile.id];
    setBoardState((prevBoardState) => ({
      ...prevBoardState,
      copyBoardState,
    }));
  };

  for (var i = horizontalAxis.length - 1; i >= 0; i--) {
    for (var j = 0; j < verticalAxis.length; j++) {
      const squareNumber = j + i - 1;
      const squareId = verticalAxis[j] + horizontalAxis[i];

      let vector = getVector(i, j);
      console.log(vector);

      dict.push({
        vector: (
          <Square
            key={squareId}
            id={squareId}
            squareNumber={squareNumber}
            squareId={squareId}
            onClick={selectPiece}
            currentBoard={boardState}
            initialState={isInitialBoard}
          />
        ),
      });
      board.push(
        <Square
          key={squareId}
          id={squareId}
          squareNumber={squareNumber}
          squareId={squareId}
          onClick={selectPiece}
          currentBoard={boardState}
          initialState={isInitialBoard}
        />
      );
    }
  }

  return (
    <h2>
      Current player: {playerTurn.charAt(0).toUpperCase() + playerTurn.slice(1)}
      <div className="board">{board}</div>
    </h2>
  );
};

export default Board;
