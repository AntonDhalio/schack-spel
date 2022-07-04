import React, { useEffect, useState } from "react";
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

const Square = ({ squareNumber, squareId }) => {
  let occupiedBy = null;
  let className = null;
  const shouldBeOccupied = startingPieces.includes(squareId);

  squareNumber % 2 === 0
    ? (className = "whiteSquare")
    : (className = "blackSquare");

  if (shouldBeOccupied) {
    occupiedBy = getRelevantPiece(squareId);
  }

  return className ? (
    <div className={className} id={squareId}>
      {occupiedBy && (
        <Piece
          id={occupiedBy[0]}
          piece={occupiedBy[1]}
          src={occupiedBy[2]}
          alt={occupiedBy[3]}
        />
      )}
    </div>
  ) : (
    <div className="whiteSquare" id={squareId}></div>
  );
};

export default Square;
