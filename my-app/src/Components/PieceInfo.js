import React from "react";
import { createVector } from "./Board";

export function getRelevantPiece(squareId) {
  let info = PieceInfo(squareId);
  return info;
}
export function getStartingPositions() {
  const dictPieces = {
    1: {
      piece: "rook",
      position: "A1",
      vector: createVector(0, 0),
      img: "./Pieces/wr.png",
      alt: "A white rook",
      color: "white",
    },

    2: {
      piece: "bishop",
      position: "B1",
      vector: createVector(1, 0),
      img: "./Pieces/wb.png",
      alt: "A white bishop",
      color: "white",
    },

    3: {
      piece: "knight",
      position: "C1",
      vector: createVector(2, 0),
      img: "./Pieces/wn.png",
      alt: "A white knight",
      color: "white",
    },

    4: {
      piece: "king",
      position: "D1",
      vector: createVector(3, 0),
      img: "./Pieces/wk.png",
      alt: "A white king",
      color: "white",
    },

    5: {
      piece: "queen",
      position: "E1",
      vector: createVector(4, 0),
      img: "./Pieces/wq.png",
      alt: "A white queen",
      color: "white",
    },

    6: {
      piece: "knight",
      position: "F1",
      vector: createVector(5, 0),
      img: "./Pieces/wn.png",
      alt: "A white knight",
      color: "white",
    },

    7: {
      piece: "bishop",
      position: "G1",
      vector: createVector(6, 0),
      img: "./Pieces/wb.png",
      alt: "A white bishop",
      color: "white",
    },

    8: {
      piece: "rook",
      position: "H1",
      vector: createVector(7, 0),
      img: "./Pieces/wr.png",
      alt: "A white rook",
      color: "white",
    },

    9: {
      piece: "pawn",
      position: "A2",
      vector: createVector(0, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    10: {
      piece: "pawn",
      position: "B2",
      vector: createVector(1, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    11: {
      piece: "pawn",
      position: "C2",
      vector: createVector(2, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    12: {
      piece: "pawn",
      position: "D2",
      vector: createVector(3, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    13: {
      piece: "pawn",
      position: "E2",
      vector: createVector(4, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    14: {
      piece: "pawn",
      position: "F2",
      vector: createVector(5, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    15: {
      piece: "pawn",
      position: "G2",
      vector: createVector(6, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    16: {
      piece: "pawn",
      position: "H2",
      vector: createVector(7, 1),
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    17: {
      piece: "rook",
      position: "A8",
      vector: createVector(0, 7),
      img: "./Pieces/br.png",
      alt: "A black rook",
      color: "black",
    },

    18: {
      piece: "bishop",
      position: "B8",
      vector: createVector(1, 7),
      img: "./Pieces/bb.png",
      alt: "A black bishop",
      color: "black",
    },

    19: {
      piece: "knight",
      position: "C8",
      vector: createVector(2, 7),
      img: "./Pieces/bn.png",
      alt: "A black knight",
      color: "black",
    },

    20: {
      piece: "king",
      position: "D8",
      vector: createVector(3, 7),
      img: "./Pieces/bk.png",
      alt: "A black king",
      color: "black",
    },

    21: {
      piece: "queen",
      position: "E8",
      vector: createVector(4, 7),
      img: "./Pieces/bq.png",
      alt: "A black queen",
      color: "black",
    },

    22: {
      piece: "knight",
      position: "F8",
      vector: createVector(5, 7),
      img: "./Pieces/bn.png",
      alt: "A black knight",
      color: "black",
    },

    23: {
      piece: "bishop",
      position: "G8",
      vector: createVector(6, 7),
      img: "./Pieces/bb.png",
      alt: "A black bishop",
      color: "black",
    },

    24: {
      piece: "rook",
      position: "H8",
      vector: createVector(7, 7),
      img: "./Pieces/br.png",
      alt: "A black rook",
      color: "black",
    },

    25: {
      piece: "pawn",
      position: "A7",
      vector: createVector(0, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    26: {
      piece: "pawn",
      position: "B7",
      vector: createVector(1, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    27: {
      piece: "pawn",
      position: "C7",
      vector: createVector(2, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    28: {
      piece: "pawn",
      position: "D7",
      vector: createVector(3, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    29: {
      piece: "pawn",
      position: "E7",
      vector: createVector(4, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    30: {
      piece: "pawn",
      position: "F7",
      vector: createVector(5, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    31: {
      piece: "pawn",
      position: "G7",
      vector: createVector(6, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    32: {
      piece: "pawn",
      position: "H7",
      vector: createVector(7, 6),
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },
  };
  return dictPieces;
}

const PieceInfo = (squareId) => {
  for (let values of Object.entries(getStartingPositions())) {
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

  return <div></div>;
};

export default PieceInfo;
