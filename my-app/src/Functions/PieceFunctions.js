import { pieceRules } from "../Data/PieceRules";
import { Colors } from "../Enums/Colors";
import { SquareOccupiedBy } from "../Enums/SquareOccupiedBy";
import {
  getGeneralMovement,
  getPawnDiagonalMovement,
  getPawnVerticalMovement,
  getKnightMovement,
} from "./MovementFunctions";

function getMovementRules(piece) {
  return Object.entries(pieceRules).find((x) => x[0] === piece);
}

function getWhatOccupiesSquare(square, pieceStateList, color) {
  const nextTile = Object.values(pieceStateList).find(
    (x) => x.position === square
  );

  if (Object.values(pieceStateList).some((x) => x.position === square)) {
    return Object.values(pieceStateList).some((x) =>
      x.position.includes(square)
    ) && nextTile.color === color
      ? SquareOccupiedBy.Player
      : SquareOccupiedBy.Opponent;
  }
  return SquareOccupiedBy.None;
}

export const getRelevantPiece = (squareId, piecePositions) => {
  for (let values of Object.entries(piecePositions)) {
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

export const availablePaths = (
  currentSquareId,
  boardState,
  currentPlayerColor,
  pieceName
) => {
  const availableSquares = [];
  const movement = getMovementRules(pieceName);
  let newPiecePosition;

  if (pieceName === "knight") {
    const knightArray = getKnightMovement(currentSquareId, boardState);
    knightArray.forEach((e) => {
      if (
        getWhatOccupiesSquare(e, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(e);
      }
    });
  } else if (pieceName === "pawn") {
    const dy = currentPlayerColor === Colors.White ? 1 : -1;

    newPiecePosition = getPawnDiagonalMovement(
      currentSquareId,
      1,
      dy,
      boardState,
      1
    );
    if (
      getWhatOccupiesSquare(
        newPiecePosition,
        boardState,
        currentPlayerColor
      ) === SquareOccupiedBy.Opponent
    ) {
      availableSquares.push(newPiecePosition);
    }
    newPiecePosition = getPawnDiagonalMovement(
      currentSquareId,
      1,
      dy,
      boardState,
      -1
    );
    if (
      getWhatOccupiesSquare(
        newPiecePosition,
        boardState,
        currentPlayerColor
      ) === SquareOccupiedBy.Opponent
    ) {
      availableSquares.push(newPiecePosition);
    }

    if (
      (boardState[currentSquareId].position.includes("2") ||
        boardState[currentSquareId].position.includes("7")) &&
      availableSquares.length === 0
    ) {
      newPiecePosition = getPawnVerticalMovement(
        currentSquareId,
        2,
        boardState,
        dy
      );
      if (
        getWhatOccupiesSquare(
          newPiecePosition,
          boardState,
          currentPlayerColor
        ) === SquareOccupiedBy.None
      ) {
        availableSquares.push(newPiecePosition);
      }
    }

    newPiecePosition = getPawnVerticalMovement(
      currentSquareId,
      1,
      boardState,
      dy
    );
    if (
      getWhatOccupiesSquare(
        newPiecePosition,
        boardState,
        currentPlayerColor
      ) === SquareOccupiedBy.None
    ) {
      availableSquares.push(newPiecePosition);
    }
  } else {
    const {
      verticalMovement,
      horizontalMovement,
      diagonalMovement,
      canMoveVertical,
      canMoveHorizontal,
      canMoveDiagonal,
    } = movement[1];

    const directions = [
      { dx: 0, dy: -1, canMove: canMoveVertical }, // Up
      { dx: 0, dy: 1, canMove: canMoveVertical }, // Down
      { dx: -1, dy: 0, canMove: canMoveHorizontal }, // Left
      { dx: 1, dy: 0, canMove: canMoveHorizontal }, // Right
      { dx: -1, dy: -1, canMove: canMoveDiagonal }, // Diagonal Up-Left
      { dx: -1, dy: 1, canMove: canMoveDiagonal }, // Diagonal Up-Right
      { dx: 1, dy: -1, canMove: canMoveDiagonal }, // Diagonal Down-Left
      { dx: 1, dy: 1, canMove: canMoveDiagonal }, // Diagonal Down-Right
    ];

    for (const { dx, dy, canMove } of directions) {
      if (canMove) {
        for (
          let i = 1;
          i <= Math.max(verticalMovement, horizontalMovement, diagonalMovement);
          i++
        ) {
          newPiecePosition = getGeneralMovement(
            currentSquareId,
            i,
            dx,
            dy,
            boardState,
            canMoveVertical,
            canMoveHorizontal,
            canMoveDiagonal
          );
          if (
            getWhatOccupiesSquare(
              newPiecePosition,
              boardState,
              currentPlayerColor
            ) !== SquareOccupiedBy.Player
          ) {
            availableSquares.push(newPiecePosition);
            if (
              getWhatOccupiesSquare(
                newPiecePosition,
                boardState,
                currentPlayerColor
              ) !== SquareOccupiedBy.None
            ) {
              break;
            }
          } else {
            break;
          }
        }
      }
    }
  }

  return [...new Set(availableSquares)];
};
