import React, { useState } from "react";
import "./Board.css";
import Square from "../Square/Square";
import { Vector2 } from "../../Types/Vector2";
import { Colors } from "../../Enums/Colors";
import { dictPieces } from "../../Data/PieceInformation";
import { xAxis, yAxis } from "../../Data/BoardAxis";
import {
  changePlayer,
  getCurrentPieceVector,
  isPiecePlayable,
} from "../../Functions/Utils";
import { availablePaths } from "../../Functions/PieceFunctions";

const Board = () => {
  const [activePiece, setActivePiece] = useState(null);
  const [boardState, setBoardState] = useState(dictPieces);
  const [isInitialBoardPositions, setIsInitialBoardPositions] = useState(true);
  const [playerColorTurn, setPlayerColorTurn] = useState(Colors.White);
  const [possibleMovesByPiece, setPossibleMovesByPiece] = useState([]);

  const selectPiece = (selectedPiece) => {
    const { target } = selectedPiece;
    if (target.className.includes("Square")) {
      if (activePiece) {
        changePosition(target, possibleMovesByPiece, false);
        setPossibleMovesByPiece([]);
      }
    }
    if (target.src) {
      const pieceColor = boardState[target.id].color;
      if (isPiecePlayable(playerColorTurn, pieceColor)) {
        setActivePiece(target.id);
        setIsInitialBoardPositions(false);
        setPossibleMovesByPiece(
          availablePaths(target.id, boardState, pieceColor, target.className)
        );
      } else if (activePiece && activePiece !== target.id) {
        changePosition(target, possibleMovesByPiece, true);
        setPossibleMovesByPiece([]);
      }
    }
  };

  let tilesIncludingVector = {};
  for (let i = Object.keys(yAxis).length - 1; i >= 0; i--) {
    for (let j = 0; j < Object.keys(xAxis).length; j++) {
      const tileNumber = j + i - 1;
      const tileId = xAxis[j] + yAxis[i];

      let vector = JSON.stringify(new Vector2(j, i));
      tilesIncludingVector[vector] = (
        <Square
          key={tileId}
          id={tileId}
          squareNumber={tileNumber}
          squareId={tileId}
          onClick={selectPiece}
          currentBoard={boardState}
          initialState={isInitialBoardPositions}
          possibleMoves={possibleMovesByPiece}
        />
      );
    }
  }
  const boardTiles = Object.values(tilesIncludingVector).map((tiles) => tiles);

  const changePosition = (target, possibleMovesByPiece, isOpponentsPiece) => {
    const copyOfPiece = { ...boardState[activePiece] };
    const targetTile = target.className.includes("Square")
      ? target.id
      : boardState[target.id].position;

    if (possibleMovesByPiece.includes(targetTile)) {
      const vectorValue = target.className.includes("Square")
        ? getCurrentPieceVector(tilesIncludingVector, target.id)
        : boardState[target.id].vector;

      copyOfPiece.position = targetTile;
      copyOfPiece.vector = vectorValue;

      if (isOpponentsPiece) {
        removePiece(target);
      }

      setBoardState((prevBoardState) => ({
        ...prevBoardState,
        [activePiece]: copyOfPiece,
      }));
      setActivePiece(null);

      if (changePlayer(boardState, activePiece)) {
        setPlayerColorTurn(Colors.Black);
      } else {
        setPlayerColorTurn(Colors.White);
      }
    }
  };

  const removePiece = (tile) => {
    setBoardState((prevBoardState) => {
      const updatedState = { ...prevBoardState };
      delete updatedState[tile.id];
      return updatedState;
    });
  };

  return (
    <h2>
      Current player:{" "}
      {playerColorTurn.charAt(0).toUpperCase() + playerColorTurn.slice(1)}
      <div className="board">{boardTiles}</div>
    </h2>
  );
};

export default Board;
