import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";
import { getStartingPositions } from "./PieceInfo";
import { availablePaths } from "./Game";

const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
let shouldRemove = null;

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

const fetchVector = (dict, id) => {
  for (let [key, values] of Object.entries(dict)) {
    if (values.key === id) {
      return key;
    }
  }
};

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const getVector = (x, y) => {
  const vector = new Vector2(x, y);
  return vector;
};

const initialState = getStartingPositions();

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [boardState, setBoardState] = useState(initialState);
  const [isInitialBoard, setIsInitialBoard] = useState(true);
  const [playerTurn, setPlayerTurn] = useState("white");
  const [possibleMoves, setPossibleMoves] = useState([]);

  let board = [];
  let dict = {};

  const selectPiece = (e) => {
    const tile = e.target;
    if (tile.className.includes("Square") && activePiece) {
      shouldRemove = false;
      changePosition(tile, possibleMoves);
      setPossibleMoves([]);
    } else if (tile.src) {
      const pieceColor = boardState[tile.id].color;
      if (isCorrectColor(playerTurn, pieceColor)) {
        setActivePiece(tile.id);
        setIsInitialBoard(false);
        setPossibleMoves(
          availablePaths(tile.id, boardState, pieceColor, tile.className)
        );
      } else if (
        !isCorrectColor(playerTurn, pieceColor) &&
        activePiece !== tile.id &&
        activePiece !== null
      ) {
        shouldRemove = true;
        changePosition(tile, possibleMoves);
        setPossibleMoves([]);
      }
    }
  };

  const changePosition = (tile, possibleMoves) => {
    let copyPiece = boardState[activePiece];
    let targetSquare = null;
    !tile.className.includes("Square")
      ? (targetSquare = boardState[tile.id].position)
      : (targetSquare = tile.id);
    for (let i = 0; i < possibleMoves.length; i++) {
      if (possibleMoves[i] === targetSquare) {
        let vectorValue = fetchVector(dict, tile.id);
        !tile.className.includes("Square")
          ? (copyPiece.position = boardState[tile.id].position) &&
            (copyPiece.vector = boardState[tile.id].vector)
          : (copyPiece.position = tile.id) && (copyPiece.vector = vectorValue);
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
      }
    }
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

      let vector = JSON.stringify(getVector(j, i));

      dict[vector] = (
        <Square
          key={squareId}
          id={squareId}
          squareNumber={squareNumber}
          squareId={squareId}
          onClick={selectPiece}
          currentBoard={boardState}
          initialState={isInitialBoard}
          possibleMoves={possibleMoves}
        />
      );
    }
  }

  for (let squares of Object.values(dict)) {
    board.push(squares);
  }

  return (
    <h2>
      Current player: {playerTurn.charAt(0).toUpperCase() + playerTurn.slice(1)}
      <div className="board">{board}</div>
    </h2>
  );
};

export default Board;
