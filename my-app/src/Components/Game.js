import React from "react";

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

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
      horizontalMovement2: 2,
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
  for (let value of Object.entries(boardState)) {
    if (square === value[1].position) {
      return true;
    }
  }
  return false;
}

function isSquareOccupiedByOpponent(square, boardState, color) {
  for (let values of Object.entries(boardState)) {
    if (square === values[1].position && values[1].color !== color) {
      return true;
    }
  }
  return false;
}

export function getNewSquare(square, isVertical) {
  //which one is active, how many steps you can go horizontally
  let newSquare = null;
  let nextSquare;
  let verticalPlacement = verticalAxis.indexOf(square.charAt(1)) + 1;
  let horizontalPlacement = horizontalAxis.indexOf(square.charAt(0)) + 1;
  if (isVertical) {
    nextSquare = `${square.charAt(0)}${verticalPlacement + 1}`;
  }

  // if (x !== null) {
  //   horizontalPlacement = horizontalPlacement + x;
  // }
  // if (
  //   verticalPlacement >= 0 &&
  //   verticalPlacement < 9 &&
  //   horizontalPlacement > 0 &&
  //   horizontalPlacement < 9
  // ) {
  //   verticalPlacement === 8
  //     ? (newSquare =
  //         verticalAxis[verticalPlacement - 1] + horizontalPlacement.toString())
  //     : (newSquare =
  //         verticalAxis[verticalPlacement] + horizontalPlacement.toString());

  return nextSquare;
  //}
}

export function getNewSquareDiagonal(square, xy) {
  let newSquare = null;

  let verticalPlacement = verticalAxis.indexOf(square.charAt(0)) + 1;
  let horizontalPlacement = horizontalAxis.indexOf(square.charAt(1)) + 1;

  if (xy !== null) {
    verticalPlacement = verticalPlacement - 1 + xy;
    horizontalPlacement = horizontalPlacement + xy;
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
  }

  return newSquare;
}

export function availablePaths(square, boardState, color, piece) {
  let availableSquares = [];
  let pathBlocked = false;
  let squareId = square; // A5
  const movement = getMovementRules(piece);
  //if (movement[1].canMoveBackwards) {
  if (movement[1].canMoveVertical) {
    for (let i = 0; i < movement[1].verticalMovement; i++) {
      squareId = getNewSquare(squareId, true);
      let isBlocked;
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
      } else {
        availableSquares.push(squareId);
      }

      // if (!pathBlocked) {
      //   if (isSquareOccupied(newPosition, boardState)) {
      //     if (isSquareOccupiedByOpponent(newPosition, boardState, color)) {
      //       availableSquares.push(newPosition);
      //       pathBlocked = true;
      //     }
      //     pathBlocked = true;
      //   } else {
      //     availableSquares.push(newPosition);
      //   }
      // }
    }

    // for (let i = 0; i >= -movement[1].verticalMovement; i--) {
    //   let position = getNewSquare(squareId, i, null);
    //   if (!pathBlocked) {
    //     if (isSquareOccupied(position, boardState)) {
    //       if (isSquareOccupiedByOpponent(position, boardState, color)) {
    //         availableSquares.push(position);
    //         pathBlocked = true;
    //       }
    //       pathBlocked = true;
    //     } else {
    //       availableSquares.push(position);
    //     }
    //   }
    // }

    // pathBlocked = false;

    // for (let i = 0; i < movement[1].verticalMovement; i++) {
    //   let position = getNewSquare(squareId, i, null);
    //   if (!pathBlocked) {
    //     if (isSquareOccupied(position, boardState)) {
    //       if (isSquareOccupiedByOpponent(position, boardState, color)) {
    //         availableSquares.push(position);
    //         pathBlocked = true;
    //       }
    //       pathBlocked = true;
    //     } else {
    //       availableSquares.push(position);
    //     }
    //   }
    // }
    //}
    // if (movement[1].canMoveHorizontal) {
    //   for (
    //     let j = -movement[1].horizontalMovement;
    //     j <= movement[1].horizontalMovement;
    //     j++
    //   ) {
    //     let position = getNewSquare(squareId, null, j);
    //     if (position !== undefined) {
    //       availableSquares.push(position);
    //     }
    //   }
    // }
    // if (movement[1].canMoveDiagonal) {
    //   for (let k = 0; k <= movement[1].diagonalMovement; k++) {
    //     let position = getNewSquareDiagonal(squareId, k);
    //     if (position !== undefined) {
    //       availableSquares.push(position);
    //     }
    //   }
    // }
    // const noDuplicates = [...new Set(availableSquares)];
    // console.log(noDuplicates);
  }
  return availableSquares;
}

const Game = (piece, color, square, boardState) => {
  const movement = getMovementRules(piece);

  return movement;
};

export default Game;
