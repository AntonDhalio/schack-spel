// import React from "react";

const xAxis = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
};
const yAxis = {
  0: "1",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
};

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
function isNextSquareValid(horizontalPlacement, verticalPlacement) {
  let nextSquare;
  if (
    horizontalPlacement >= 0 &&
    horizontalPlacement < 8 &&
    verticalPlacement >= 0 &&
    verticalPlacement < 8
  ) {
    nextSquare = xAxis[horizontalPlacement] + yAxis[verticalPlacement];
  } else {
    nextSquare = null;
  }
  return nextSquare;
}
function moveUpp(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x;
  let verticalPlacement = vector.y + numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveDown(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x;
  let verticalPlacement = vector.y - numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveLeft(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x - numberOfSquaresMoved;
  let verticalPlacement = vector.y;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveRight(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x + numberOfSquaresMoved;
  let verticalPlacement = vector.y;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveDiagonalUR(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x - numberOfSquaresMoved;
  let verticalPlacement = vector.y + numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveDiagonalUL(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x + numberOfSquaresMoved;
  let verticalPlacement = vector.y + numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveDiagonalDR(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x + numberOfSquaresMoved;
  let verticalPlacement = vector.y - numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function moveDiagonalDL(square, numberOfSquaresMoved, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let horizontalPlacement = vector.x - numberOfSquaresMoved;
  let verticalPlacement = vector.y - numberOfSquaresMoved;
  let nextSquare = isNextSquareValid(horizontalPlacement, verticalPlacement);
  return nextSquare;
}
function specialMoveKnight(square, boardState) {
  let vector = JSON.parse(boardState[square].vector);
  let nextSquare = [];
  let horizontalPlacement = vector.x + 2;
  let verticalPlacement = vector.y + 1;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x + 2;
  verticalPlacement = vector.y - 1;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x - 2;
  verticalPlacement = vector.y - 1;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x - 2;
  verticalPlacement = vector.y + 1;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x - 1;
  verticalPlacement = vector.y + 2;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x + 1;
  verticalPlacement = vector.y + 2;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x - 1;
  verticalPlacement = vector.y - 2;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  horizontalPlacement = vector.x + 1;
  verticalPlacement = vector.y - 2;
  nextSquare.push(isNextSquareValid(horizontalPlacement, verticalPlacement));
  return nextSquare;
}

export function availablePaths(tileId, boardState, color, piece) {
  let availableSquares = [];
  let isBlocked = false;
  let squareId = null;
  const movement = getMovementRules(piece);
  if (piece === "knight") {
    let knightArray = specialMoveKnight(tileId, boardState);
    knightArray.forEach((e) => {
      if (isSquareOccupied(e, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(e, boardState, color)) {
          availableSquares.push(e);
        }
      } else if (e !== null) {
        availableSquares.push(e);
      }
    });
  } else if (piece === "pawn") {
    if (color === "white") {
      squareId = moveDiagonalUR(tileId, 1, boardState);
      if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
        availableSquares.push(squareId);
      }
      squareId = moveDiagonalUL(tileId, 1, boardState);
      if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
        availableSquares.push(squareId);
      }
      if (boardState[tileId].position.includes("2")) {
        for (let i = 1; i < 3; i++) {
          squareId = moveUpp(tileId, i, boardState);
          if (!isSquareOccupied(squareId, boardState)) {
            availableSquares.push(squareId);
          }
        }
      } else {
        squareId = moveUpp(tileId, 1, boardState);
        if (!isSquareOccupied(squareId, boardState)) {
          availableSquares.push(squareId);
        }
      }
    } else if (color === "black") {
      squareId = moveDiagonalDR(tileId, 1, boardState);
      if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
        availableSquares.push(squareId);
      }
      squareId = moveDiagonalDL(tileId, 1, boardState);
      if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
        availableSquares.push(squareId);
      }
      if (boardState[tileId].position.includes("7")) {
        for (let i = 1; i < 3; i++) {
          squareId = moveDown(tileId, i, boardState);
          if (!isSquareOccupied(squareId, boardState)) {
            availableSquares.push(squareId);
          }
        }
      } else {
        squareId = moveDown(tileId, 1, boardState);
        if (!isSquareOccupied(squareId, boardState)) {
          availableSquares.push(squareId);
        }
      }
    }
  } else {
    for (let i = 1; i < movement[1].verticalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveUpp(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }

    isBlocked = false;
    for (let i = 1; i < movement[1].verticalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveDown(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].horizontalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveLeft(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].horizontalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveRight(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveDiagonalUR(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveDiagonalUL(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveDiagonalDL(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        squareId = moveDiagonalDR(tileId, i, boardState);
      }
      if (isSquareOccupied(squareId, boardState)) {
        isBlocked = true;
        if (isSquareOccupiedByOpponent(squareId, boardState, color)) {
          availableSquares.push(squareId);
        }
      } else if (squareId !== null) {
        availableSquares.push(squareId);
      }
    }
    isBlocked = false;
  }

  const noDuplicates = [...new Set(availableSquares)];
  return noDuplicates;
}

const Game = (piece, color, square, boardState) => {
  const movement = getMovementRules(piece);

  return movement;
};

export default Game;
