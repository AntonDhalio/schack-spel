import { Colors } from "../Enums/Colors";

export const changePlayer = (boardState, activePiece) => {
  let piece = boardState[activePiece];
  if (piece.color === Colors.White) {
    return true;
  }
  return false;
};

export const isPiecePlayable = (playerTurn, pieceColor) => {
  if (playerTurn === Colors.White && pieceColor === Colors.White) {
    return true;
  } else if (playerTurn === Colors.Black && pieceColor === Colors.Black) {
    return true;
  } else {
    return false;
  }
};

export const getCurrentPieceVector = (dict, id) => {
  for (let [key, values] of Object.entries(dict)) {
    if (values.key === id) {
      return JSON.parse(key);
    }
  }
};
