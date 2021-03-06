import React, { useState, useEffect } from "react";
import "./Board.css";
import Square from "./Square";
import { getStartingPositions } from "./PieceInfo";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

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

const initialState = getStartingPositions();

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [boardState, setBoardState] = useState(initialState);
  const [isInitialBoard, setIsInitialBoard] = useState(true);
  const [playerTurn, setPlayerTurn] = useState("white");

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
      ? (copyPiece.startingPosition = boardState[tile.id].startingPosition)
      : (copyPiece.startingPosition = tile.id);
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
