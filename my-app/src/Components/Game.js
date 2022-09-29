import { xAxis, yAxis } from "../Data/BoardAxis";
import { pieceRules, knightMovement } from "../Data/PieceRules";
import { Colors } from "../Enums/Colors";
import { SquareOccupiedBy } from "../Enums/SquareOccupiedBy";

function getMovementRules(piece) {
  return Object.entries(pieceRules).find((x) => x[0] === piece);
}

function isSquareOccupied(square, pieceStateList, color) {
  const nextTile = Object.values(pieceStateList).find(
    (x) => x.position === square
  );

  if (Object.values(pieceStateList).some((x) => x.position === square)) {
    return Object.values(pieceStateList).some((x) =>
      x.position.includes(square)
    ) && nextTile.color === color
      ? SquareOccupiedBy.Player
      : SquareOccupiedBy.Opponent;
  } else {
    return SquareOccupiedBy.None;
  }
}

function getNextSquare(horizontalPlacement, verticalPlacement) {
  if (
    horizontalPlacement >= 0 &&
    horizontalPlacement < 8 &&
    verticalPlacement >= 0 &&
    verticalPlacement < 8
  ) {
    return xAxis[horizontalPlacement] + yAxis[verticalPlacement];
  }
  return null;
}

function getPiecePosition(currentSquare, boardState) {
  return boardState[currentSquare].vector;
}

function moveUp(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  const verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(piecePosition.x, verticalPlacement);
}
function moveDown(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(piecePosition.x, verticalPlacement);
}
function moveLeft(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, piecePosition.y);
}
function moveRight(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, piecePosition.y);
}
function moveDiagonalUR(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
function moveDiagonalUL(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
function moveDiagonalDR(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
function moveDiagonalDL(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}

function specialKnightMoves(currentSquare, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let nextSquare = [];

  knightMovement.forEach((move) => {
    nextSquare.push(
      getNextSquare(piecePosition.x + move.x, piecePosition.y + move.y)
    );
  });
  return nextSquare;
}

export function availablePaths(
  currentSquareId,
  boardState,
  currentPlayerColor,
  pieceName
) {
  let availableSquares = [];
  let isBlocked = false;
  let newPiecePosition = null;
  const movement = getMovementRules(pieceName);

  if (pieceName === "knight") {
    const knightArray = specialKnightMoves(currentSquareId, boardState);
    knightArray.forEach((e) => {
      if (
        isSquareOccupied(e, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(e);
      }
    });
  } else if (pieceName === "pawn") {
    if (currentPlayerColor === Colors.White) {
      newPiecePosition = moveDiagonalUR(currentSquareId, 1, boardState);
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
        SquareOccupiedBy.Opponent
      ) {
        availableSquares.push(newPiecePosition);
      }
      newPiecePosition = moveDiagonalUL(currentSquareId, 1, boardState);
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
        SquareOccupiedBy.Opponent
      ) {
        availableSquares.push(newPiecePosition);
      }
      if (boardState[currentSquareId].position.includes("2")) {
        for (let i = 1; i < 3; i++) {
          newPiecePosition = moveUp(currentSquareId, i, boardState);
          if (
            isSquareOccupied(
              newPiecePosition,
              boardState,
              currentPlayerColor
            ) === SquareOccupiedBy.None &&
            !isBlocked
          ) {
            availableSquares.push(newPiecePosition);
          } else {
            isBlocked = true;
          }
        }
        isBlocked = false;
      } else {
        newPiecePosition = moveUp(currentSquareId, 1, boardState);
        if (
          isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
          SquareOccupiedBy.None
        ) {
          availableSquares.push(newPiecePosition);
        }
      }
    } else if (currentPlayerColor === Colors.Black) {
      newPiecePosition = moveDiagonalDR(currentSquareId, 1, boardState);
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
        SquareOccupiedBy.Opponent
      ) {
        availableSquares.push(newPiecePosition);
      }
      newPiecePosition = moveDiagonalDL(currentSquareId, 1, boardState);
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
        SquareOccupiedBy.Opponent
      ) {
        availableSquares.push(newPiecePosition);
      }
      if (boardState[currentSquareId].position.includes("7")) {
        for (let i = 1; i < 3; i++) {
          newPiecePosition = moveDown(currentSquareId, i, boardState);
          if (
            isSquareOccupied(
              newPiecePosition,
              boardState,
              currentPlayerColor
            ) === SquareOccupiedBy.None &&
            !isBlocked
          ) {
            availableSquares.push(newPiecePosition);
          } else {
            isBlocked = true;
          }
        }
        isBlocked = false;
      } else {
        newPiecePosition = moveDown(currentSquareId, 1, boardState);
        if (
          isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) ===
          SquareOccupiedBy.None
        ) {
          availableSquares.push(newPiecePosition);
        }
      }
    }
  } else {
    for (let i = 1; i < movement[1].verticalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveUp(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }

    isBlocked = false;
    for (let i = 1; i < movement[1].verticalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveDown(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].horizontalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveLeft(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].horizontalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveRight(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveDiagonalUR(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveDiagonalUL(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveDiagonalDL(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;

    for (let i = 1; i < movement[1].diagonalMovement + 1; i++) {
      if (!isBlocked) {
        newPiecePosition = moveDiagonalDR(currentSquareId, i, boardState);
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.None
      ) {
        isBlocked = true;
      }
      if (
        isSquareOccupied(newPiecePosition, boardState, currentPlayerColor) !==
        SquareOccupiedBy.Player
      ) {
        availableSquares.push(newPiecePosition);
      }
    }
    isBlocked = false;
  }

  const noDuplicates = [...new Set(availableSquares)];
  return noDuplicates;
}
