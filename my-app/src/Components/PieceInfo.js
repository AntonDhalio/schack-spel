import React from "react";
import Piece from "./Piece";

const PieceInfo = (squareId) => {
  //

  var dictPieces = {
    1: {
      piece: "Rook",
      startingPosition: "A1",
      img: "./Pieces/wr.png",
      alt: "A white rook",
    },

    2: {
      piece: "Bishop",
      startingPosition: "B1",
      img: "./Pieces/wb.png",
      alt: "A white bishop",
    },

    3: {
      piece: "Knight",
      startingPosition: "C1",
      img: "./Pieces/wn.png",
      alt: "A white knight",
    },

    4: {
      piece: "King",
      startingPosition: "D1",
      img: "./Pieces/wk.png",
      alt: "A white king",
    },

    5: {
      piece: "Queen",
      startingPosition: "E1",
      img: "./Pieces/wq.png",
      alt: "A white queen",
    },

    6: {
      piece: "Knight",
      startingPosition: "F1",
      img: "./Pieces/wn.png",
      alt: "A white knight",
    },

    7: {
      piece: "Bishop",
      startingPosition: "G1",
      img: "./Pieces/wb.png",
      alt: "A white bishop",
    },

    8: {
      piece: "Rook",
      startingPosition: "H1",
      img: "./Pieces/wr.png",
      alt: "A white rook",
    },

    9: {
      piece: "Pawn",
      startingPosition: "A2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    10: {
      piece: "Pawn",
      startingPosition: "B2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    11: {
      piece: "Pawn",
      startingPosition: "C2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    12: {
      piece: "Pawn",
      startingPosition: "D2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    13: {
      piece: "Pawn",
      startingPosition: "E2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    14: {
      piece: "Pawn",
      startingPosition: "F2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    15: {
      piece: "Pawn",
      startingPosition: "G2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    16: {
      piece: "Pawn",
      startingPosition: "H2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
    },

    17: {
      piece: "Rook",
      startingPosition: "A8",
      img: "./Pieces/br.png",
      alt: "A black rook",
    },

    18: {
      piece: "Bishop",
      startingPosition: "B8",
      img: "./Pieces/bb.png",
      alt: "A black bishop",
    },

    19: {
      piece: "Knight",
      startingPosition: "C8",
      img: "./Pieces/bn.png",
      alt: "A black knight",
    },

    20: {
      piece: "King",
      startingPosition: "D8",
      img: "./Pieces/bk.png",
      alt: "A black king",
    },

    21: {
      piece: "Queen",
      startingPosition: "E8",
      img: "./Pieces/bq.png",
      alt: "A black queen",
    },

    22: {
      piece: "Knight",
      startingPosition: "F8",
      img: "./Pieces/bn.png",
      alt: "A black knight",
    },

    23: {
      piece: "Bishop",
      startingPosition: "G8",
      img: "./Pieces/bb.png",
      alt: "A black bishop",
    },

    24: {
      piece: "Rook",
      startingPosition: "H8",
      img: "./Pieces/br.png",
      alt: "A black rook",
    },

    25: {
      piece: "Pawn",
      startingPosition: "A7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    26: {
      piece: "Pawn",
      startingPosition: "B7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    27: {
      piece: "Pawn",
      startingPosition: "C7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    28: {
      piece: "Pawn",
      startingPosition: "D7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    29: {
      piece: "Pawn",
      startingPosition: "E7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    30: {
      piece: "Pawn",
      startingPosition: "F7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    31: {
      piece: "Pawn",
      startingPosition: "G7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },

    32: {
      piece: "Pawn",
      startingPosition: "H7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
    },
  };

  for (let values of Object.values(dictPieces)) {
    console.log(values.piece);
    const pieceInfo = values.piece;
    if (values.startingPosition === squareId) {
      return pieceInfo;
    }
  }

  return <div></div>;
};

export default PieceInfo;
