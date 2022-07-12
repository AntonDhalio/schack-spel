import React from "react";

export function getRelevantPiece(squareId) {
  let info = PieceInfo(squareId);
  // console.log(info);
  return info;
}
export function getStartingPositions() {
  const dictPieces = {
    1: {
      piece: "rook",
      startingPosition: "A1",
      img: "./Pieces/wr.png",
      alt: "A white rook",
      color: "white",
    },

    2: {
      piece: "bishop",
      startingPosition: "B1",
      img: "./Pieces/wb.png",
      alt: "A white bishop",
      color: "white",
    },

    3: {
      piece: "knight",
      startingPosition: "C1",
      img: "./Pieces/wn.png",
      alt: "A white knight",
      color: "white",
    },

    4: {
      piece: "king",
      startingPosition: "D1",
      img: "./Pieces/wk.png",
      alt: "A white king",
      color: "white",
    },

    5: {
      piece: "queen",
      startingPosition: "E1",
      img: "./Pieces/wq.png",
      alt: "A white queen",
      color: "white",
    },

    6: {
      piece: "knight",
      startingPosition: "F1",
      img: "./Pieces/wn.png",
      alt: "A white knight",
      color: "white",
    },

    7: {
      piece: "bishop",
      startingPosition: "G1",
      img: "./Pieces/wb.png",
      alt: "A white bishop",
      color: "white",
    },

    8: {
      piece: "rook",
      startingPosition: "H1",
      img: "./Pieces/wr.png",
      alt: "A white rook",
      color: "white",
    },

    9: {
      piece: "pawn",
      startingPosition: "A2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    10: {
      piece: "pawn",
      startingPosition: "B2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    11: {
      piece: "pawn",
      startingPosition: "C2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    12: {
      piece: "pawn",
      startingPosition: "D2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    13: {
      piece: "pawn",
      startingPosition: "E2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    14: {
      piece: "pawn",
      startingPosition: "F2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    15: {
      piece: "pawn",
      startingPosition: "G2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    16: {
      piece: "pawn",
      startingPosition: "H2",
      img: "./Pieces/wp.png",
      alt: "A white pawn",
      color: "white",
    },

    17: {
      piece: "rook",
      startingPosition: "A8",
      img: "./Pieces/br.png",
      alt: "A black rook",
      color: "black",
    },

    18: {
      piece: "bishop",
      startingPosition: "B8",
      img: "./Pieces/bb.png",
      alt: "A black bishop",
      color: "black",
    },

    19: {
      piece: "knight",
      startingPosition: "C8",
      img: "./Pieces/bn.png",
      alt: "A black knight",
      color: "black",
    },

    20: {
      piece: "king",
      startingPosition: "D8",
      img: "./Pieces/bk.png",
      alt: "A black king",
      color: "black",
    },

    21: {
      piece: "queen",
      startingPosition: "E8",
      img: "./Pieces/bq.png",
      alt: "A black queen",
      color: "black",
    },

    22: {
      piece: "knight",
      startingPosition: "F8",
      img: "./Pieces/bn.png",
      alt: "A black knight",
      color: "black",
    },

    23: {
      piece: "bishop",
      startingPosition: "G8",
      img: "./Pieces/bb.png",
      alt: "A black bishop",
      color: "black",
    },

    24: {
      piece: "rook",
      startingPosition: "H8",
      img: "./Pieces/br.png",
      alt: "A black rook",
      color: "black",
    },

    25: {
      piece: "pawn",
      startingPosition: "A7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    26: {
      piece: "pawn",
      startingPosition: "B7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    27: {
      piece: "pawn",
      startingPosition: "C7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    28: {
      piece: "pawn",
      startingPosition: "D7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    29: {
      piece: "pawn",
      startingPosition: "E7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    30: {
      piece: "pawn",
      startingPosition: "F7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    31: {
      piece: "pawn",
      startingPosition: "G7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },

    32: {
      piece: "pawn",
      startingPosition: "H7",
      img: "./Pieces/bp.png",
      alt: "A black pawn",
      color: "black",
    },
  };
  return dictPieces;
}

const PieceInfo = (squareId) => {
  for (let values of Object.entries(getStartingPositions())) {
    if (values[1].startingPosition === squareId) {
      // let value = [values[0], values[1].piece, values[1].img, values[1].alt];
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
