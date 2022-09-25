import React, { memo, useState } from "react";
import "../CSS/Board.css";
import Square from "./Square";
import { availablePaths } from "./Game";
import { Vector2 } from "../Types/Vector2";
import { Colors } from "../Enums/Colors";
import { dictPieces } from "../Data/PieceInformation";

const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
let shouldRemove = null;

const changePlayer = (boardState, activePiece) => {
  let piece = boardState[activePiece];
  if (piece.color === Colors.White) {
    return true;
  }
  return false;
};

const isCorrectColor = (playerTurn, pieceColor) => {
  if (playerTurn === Colors.White && pieceColor === Colors.White) {
    return true;
  } else if (playerTurn === Colors.Black && pieceColor === Colors.Black) {
    return true;
  } else {
    return false;
  }
};

const fetchVector = (dict, id) => {
  for (let [key, values] of Object.entries(dict)) {
    if (values.key === id) {
      return JSON.parse(key);
    }
  }
};

const initialState = dictPieces;

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [boardState, setBoardState] = useState(initialState);
  const [isInitialBoardPositions, setIsInitialBoardPositions] = useState(true);
  const [playerTurn, setPlayerTurn] = useState(Colors.White);
  const [possibleMoves, setPossibleMoves] = useState([]);

  let boardTiles = [];
  let tilesIncludingVector = {};

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
        setIsInitialBoardPositions(false);
        setPossibleMoves(
          availablePaths(tile.id, boardState, pieceColor, tile.className)
        );
      } else if (activePiece !== tile.id && activePiece !== null) {
        shouldRemove = true;
        changePosition(tile, possibleMoves);
        setPossibleMoves([]);
      }
    }
  };

  for (var i = horizontalAxis.length - 1; i >= 0; i--) {
    for (var j = 0; j < verticalAxis.length; j++) {
      const squareNumber = j + i - 1;
      const squareId = verticalAxis[j] + horizontalAxis[i];

      let vector = JSON.stringify(new Vector2(j, i));
      tilesIncludingVector[vector] = (
        <Square
          key={squareId}
          id={squareId}
          squareNumber={squareNumber}
          squareId={squareId}
          onClick={selectPiece}
          currentBoard={boardState}
          initialState={isInitialBoardPositions}
          possibleMoves={possibleMoves}
        />
      );
    }
  }

  for (let tiles of Object.values(tilesIncludingVector)) {
    boardTiles.push(tiles);
  }

  const changePosition = (tile, possibleMoves) => {
    let copyOfPiece = boardState[activePiece];
    let targetTile = null;
    !tile.className.includes("Square")
      ? (targetTile = boardState[tile.id].position)
      : (targetTile = tile.id);
    for (let i = 0; i < possibleMoves.length; i++) {
      if (possibleMoves[i] === targetTile) {
        let vectorValue = fetchVector(tilesIncludingVector, tile.id);
        !tile.className.includes("Square")
          ? (copyOfPiece.position = boardState[tile.id].position) &&
            (copyOfPiece.vector = boardState[tile.id].vector)
          : (copyOfPiece.position = tile.id) &&
            (copyOfPiece.vector = vectorValue);
        if (shouldRemove) {
          removePiece(tile);
        }
        setBoardState((prevBoardState) => ({
          ...prevBoardState,
          copyPiece: copyOfPiece,
        }));
        setActivePiece(null);
        changePlayer(boardState, activePiece)
          ? setPlayerTurn(Colors.Black)
          : setPlayerTurn(Colors.White);
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

  return (
    <h2>
      Current player: {playerTurn.charAt(0).toUpperCase() + playerTurn.slice(1)}
      <div className="board">{boardTiles}</div>
    </h2>
  );
};

export default Board;
