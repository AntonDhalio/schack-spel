import React from "react";
import Piece from "./Piece";
import { getRelevantPiece } from "./PieceInfo";

const startingPieces = [
  "A1",
  "B1",
  "C1",
  "D1",
  "E1",
  "F1",
  "G1",
  "H1",
  "A2",
  "B2",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "H2",
  "A7",
  "B7",
  "C7",
  "D7",
  "E7",
  "F7",
  "G7",
  "H7",
  "A8",
  "B8",
  "C8",
  "D8",
  "E8",
  "F8",
  "G8",
  "H8",
];

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
  const shouldBeOccupied = startingPieces.includes(squareId);

  const getPiecePosition = () => {
    for (let values of Object.entries(currentBoard)) {
      if (values[1].position === squareId) {
        const info = {
          id: values[0],
          pieceType: values[1].piece,
          image: values[1].img,
          alt: values[1].alt,
        };
        return info;
      }
    }
  };

  possibleMoves.forEach((e) => {
    if (e === squareId) {
      isActive = true;
    }
  });

  squareNumber % 2 === 0
    ? (className = "whiteSquare")
    : (className = "blackSquare");

  if (shouldBeOccupied && initialState) {
    occupiedBy = getRelevantPiece(squareId);
  } else if (initialState === false) {
    occupiedBy = getPiecePosition();
  }
  return className ? (
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
  ) : (
    <div className="whiteSquare" id={squareId}></div>
  );
};

export default Square;
