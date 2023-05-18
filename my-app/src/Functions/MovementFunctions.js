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

export function getKnightMovement(currentSquare, boardState) {
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

export function getPawnVerticalMovement(
  currentSquare,
  numberOfSquaresMoved,
  boardState,
  direction
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  const verticalPlacement = piecePosition.y + numberOfSquaresMoved * direction;

  return getNextSquare(piecePosition.x, verticalPlacement);
}

export function getPawnDiagonalMovement(
  currentSquareId,
  numberOfSquaresMoved,
  verticalDirection,
  boardState,
  horizontalDirection
) {
  const piecePosition = getPiecePosition(currentSquareId, boardState);
  const horizontalPlacement = piecePosition.x + horizontalDirection;
  const verticalPlacement =
    piecePosition.y + numberOfSquaresMoved * verticalDirection;
  return getNextSquare(horizontalPlacement, verticalPlacement);
}

export function getGeneralMovement(
  currentSquare,
  numberOfSquaresMoved,
  horizontalDirection,
  verticalDirection,
  boardState,
  canMoveVertical,
  canMoveHorizontal,
  canMoveDiagonal
) {
  const piecePosition = getPiecePosition(currentSquare, boardState);
  const horizontalPlacement =
    piecePosition.x + numberOfSquaresMoved * horizontalDirection;
  const verticalPlacement =
    piecePosition.y + numberOfSquaresMoved * verticalDirection;

  if (
    (canMoveVertical && horizontalDirection === 0 && verticalDirection !== 0) ||
    (canMoveHorizontal &&
      horizontalDirection !== 0 &&
      verticalDirection === 0) ||
    (canMoveDiagonal &&
      Math.abs(horizontalDirection) === 1 &&
      Math.abs(verticalDirection) === 1)
  ) {
    return getNextSquare(horizontalPlacement, verticalPlacement);
  }

  return currentSquare;
}
