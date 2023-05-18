import React from "react";
import { initialOccupiedSquares } from "../../Data/InitialOccupiedSquares";
import Piece from "../Piece/Piece";
import { getRelevantPiece } from "../../Functions/PieceFunctions";

const Square = ({
  squareNumber,
  squareId,
  onClick,
  initialState,
  currentBoard,
  possibleMoves,
}) => {
  const shouldBeOccupied = initialOccupiedSquares.includes(squareId);
  const className = squareNumber % 2 === 0 ? "whiteSquare" : "blackSquare";
  const isActive = possibleMoves.includes(squareId);
  const pieceOccupyingTile =
    (shouldBeOccupied && initialState) || !initialState
      ? getRelevantPiece(squareId, currentBoard)
      : null;

  return (
    <div
      className={isActive ? className + "Active" : className}
      id={squareId}
      onClick={onClick}
    >
      {pieceOccupyingTile && (
        <Piece
          id={pieceOccupyingTile.id}
          piece={pieceOccupyingTile.pieceType}
          src={pieceOccupyingTile.image}
          alt={pieceOccupyingTile.alt}
        />
      )}
    </div>
  );
};

export default Square;
