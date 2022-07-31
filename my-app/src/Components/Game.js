import React from "react";

const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function pieceRules() {
  const pieceRules = {
    king: {
      canMoveVertical: true,
      canMoveHorizontal: true,
      canMoveDiagonal: true,
      hasSpecialMovement: false,
      canMoveThroughPieces: false,
      specialMovement: null,
      verticalMovement: 1,
      horizontalMovement: 1,
      diagonalMovement: 1,
      canMoveBackwards: true,
    },
    queen: {
      canMoveVertical: true,
      canMoveHorizontal: true,
      canMoveDiagonal: true,
      hasSpecialMovement: false,
      canMoveThroughPieces: false,
      specialMovement: null,
      verticalMovement: 7,
      horizontalMovement: 7,
      diagonalMovement: 7,
      canMoveBackwards: true,
    },
    knight: {
      canMoveVertical: true,
      canMoveHorizontal: true,
      canMoveDiagonal: false,
      hasSpecialMovement: false,
      canMoveThroughPieces: true,
      specialMovement: null,
      verticalMovement: 1, //the knight can first move 2 horizontal/vertical and then 1 horizontal/vertical
      verticalMovement2: 2,
      horizontalMovement: 1,
      horizontalMovement: 2,
      firstMovment: 2,
      diagonalMovement: null,
      canMoveBackwards: true,
    },
    bishop: {
      canMoveVertical: false,
      canMoveHorizontal: false,
      canMoveDiagonal: true,
      hasSpecialMovement: false,
      canMoveThroughPieces: false,
      specialMovement: null,
      verticalMovement: null,
      horizontalMovement: null,
      diagonalMovement: 7,
      canMoveBackwards: true,
    },
    rook: {
      canMoveVertical: true,
      canMoveHorizontal: true,
      canMoveDiagonal: false,
      hasSpecialMovement: false,
      canMoveThroughPieces: false,
      specialMovement: null,
      verticalMovement: 7,
      horizontalMovement: 7,
      diagonalMovement: null,
      canMoveBackwards: true,
    },
    pawn: {
      canMoveVertical: true,
      canMoveHorizontal: false,
      canMoveDiagonal: true, //if an enemy piece is on a diagonal square
      hasSpecialMovement: true,
      canMoveThroughPieces: false,
      specialMovement: 2,
      verticalMovement: 1,
      horizontalMovement: null,
      diagonalMovement: 1,
      canMoveBackwards: false,
    },
  };
  return pieceRules;
}

export function getMovementRules(piece, square) {
  for (let values of Object.entries(pieceRules())) {
    if (values[0] === piece) {
      return values;
    }
  }
}

function isSquareOccupied(square, boardState) {
  for (let values of Object.entries(boardState)) {
    if (square === values[1].startingPosition) {
      return true;
    }
  }
  return false;
}

export function getNewSquare(square, x, y) {
  let newSquare = null;

  let verticalPlacement = verticalAxis.indexOf(square.charAt(0)) + 1;
  let horizontalPlacement = horizontalAxis.indexOf(square.charAt(1)) + 1;

  if (x !== null) {
    verticalPlacement = verticalPlacement - 1 + x;
  }
  if (y !== null) {
    horizontalPlacement = horizontalPlacement + y;
  }
  if (
    verticalPlacement >= 0 &&
    verticalPlacement < 9 &&
    horizontalPlacement > 0 &&
    horizontalPlacement < 9
  ) {
    verticalPlacement === 8
      ? (newSquare =
          verticalAxis[verticalPlacement - 1] + horizontalPlacement.toString())
      : (newSquare =
          verticalAxis[verticalPlacement] + horizontalPlacement.toString());

    return newSquare;
  }
}

export function getNewSquareDiagonal(square, xy) {
  let newSquare = null;

  let verticalPlacement = verticalAxis.indexOf(square.charAt(0)) + 1;
  let horizontalPlacement = horizontalAxis.indexOf(square.charAt(1)) + 1;

  return newSquare;
}

export function availablePaths(square, boardState, color, piece) {
  let availableSquares = [];
  const squareId = square;
  const movement = getMovementRules(piece);
  if (movement[1].canMoveBackwards) {
    if (movement[1].canMoveVertical) {
      for (
        let i = -movement[1].verticalMovement;
        i <= movement[1].verticalMovement;
        i++
      ) {
        let position = getNewSquare(squareId, i, null);
        if (position !== undefined) {
          availableSquares.push(position);
        }
      }
    }
    if (movement[1].canMoveHorizontal) {
      for (
        let j = -movement[1].horizontalMovement;
        j <= movement[1].horizontalMovement;
        j++
      ) {
        let position = getNewSquare(squareId, null, j);
        if (position !== undefined) {
          availableSquares.push(position);
        }
      }
    }
    if (movement[1].canMoveDiagonal) {
      for (
        let k = -movement[1].diagonalMovement;
        k <= movement[1].diagonalMovement;
        k++
      ) {
        let position = getNewSquareDiagonal(squareId, k);
        if (position !== undefined) {
          availableSquares.push(position);
        }
      }
    }
    const noDuplicates = [...new Set(availableSquares)];
    console.log(noDuplicates);
  }
  return availableSquares;
}

const Game = (piece, color, square, boardState) => {
  const movement = getMovementRules(piece);

  return movement;
};

export default Game;
