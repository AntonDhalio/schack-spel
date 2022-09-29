import React from "react";
import { initialOccupiedSquares } from "../Data/InitialOccupiedSquares";
import Piece from "./Piece";
import { getRelevantPiece } from "../Functions/GetRelevantPiece";

const Square = ({
  squareNumber,
  squareId,
  onClick,
  initialState,
  currentBoard,
  possibleMoves,
}) => {
  let occupiedBy = null;
  let className = null;
  let isActive = null;
  const shouldBeOccupied = initialOccupiedSquares.includes(squareId);

  possibleMoves.forEach((e) => {
    if (e === squareId) {
      isActive = true;
    }
  });

  squareNumber % 2 === 0
    ? (className = "whiteSquare")
    : (className = "blackSquare");

  if ((shouldBeOccupied && initialState) || !initialState) {
    occupiedBy = getRelevantPiece(squareId, currentBoard);
  }
  return (
    <div
      className={!isActive ? className : className + "Active"}
      id={squareId}
      onClick={onClick}
    >
      {occupiedBy && (
        <Piece
          id={occupiedBy.id}
          piece={occupiedBy.pieceType}
          src={occupiedBy.image}
          alt={occupiedBy.alt}
        />
      )}
    </div>
  );
};

export default Square;
