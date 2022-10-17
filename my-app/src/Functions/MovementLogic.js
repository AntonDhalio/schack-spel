import { xAxis, yAxis } from "../Data/BoardAxis";
import { knightMovement } from "../Data/PieceRules";

export function getNextSquare(horizontalPlacement, verticalPlacement) {
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

export function specialKnightMoves(currentSquare, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let nextSquare = [];

  knightMovement.forEach((move) => {
    nextSquare.push(
      getNextSquare(piecePosition.x + move.x, piecePosition.y + move.y)
    );
  });
  return nextSquare;
}

export function getPiecePosition(currentSquare, boardState) {
  return boardState[currentSquare].vector;
}

export function moveUp(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  const verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(piecePosition.x, verticalPlacement);
}
export function moveDown(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(piecePosition.x, verticalPlacement);
}
export function moveLeft(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, piecePosition.y);
}
export function moveRight(currentSquare, numberOfSquaresMoved, boardState) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, piecePosition.y);
}
export function moveDiagonalUR(
  currentSquare,
  numberOfSquaresMoved,
  boardState
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
export function moveDiagonalUL(
  currentSquare,
  numberOfSquaresMoved,
  boardState
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y + numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
export function moveDiagonalDR(
  currentSquare,
  numberOfSquaresMoved,
  boardState
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x + numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
export function moveDiagonalDL(
  currentSquare,
  numberOfSquaresMoved,
  boardState
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  let horizontalPlacement = piecePosition.x - numberOfSquaresMoved;
  let verticalPlacement = piecePosition.y - numberOfSquaresMoved;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}
