import { Colors } from "../Enums/Colors";
import { Vector2 } from "../Types/Vector2";
import * as Pieces from "../Pieces";

export const dictPieces = {
  1: {
    piece: "rook",
    position: "A1",
    vector: new Vector2(0, 0),
    img: Pieces.wr,
    alt: "A white rook",
    color: Colors.White,
  },

  2: {
    piece: "bishop",
    position: "B1",
    vector: new Vector2(1, 0),
    img: Pieces.wb,
    alt: "A white bishop",
    color: Colors.White,
  },

  3: {
    piece: "knight",
    position: "C1",
    vector: new Vector2(2, 0),
    img: Pieces.wn,
    alt: "A white knight",
    color: Colors.White,
  },

  4: {
    piece: "king",
    position: "D1",
    vector: new Vector2(3, 0),
    img: Pieces.wk,
    alt: "A white king",
    color: Colors.White,
  },

  5: {
    piece: "queen",
    position: "E1",
    vector: new Vector2(4, 0),
    img: Pieces.wq,
    alt: "A white queen",
    color: Colors.White,
  },

  6: {
    piece: "knight",
    position: "F1",
    vector: new Vector2(5, 0),
    img: Pieces.wn,
    alt: "A white knight",
    color: Colors.White,
  },

  7: {
    piece: "bishop",
    position: "G1",
    vector: new Vector2(6, 0),
    img: Pieces.wb,
    alt: "A white bishop",
    color: Colors.White,
  },

  8: {
    piece: "rook",
    position: "H1",
    vector: new Vector2(7, 0),
    img: Pieces.wr,
    alt: "A white rook",
    color: Colors.White,
  },

  9: {
    piece: "pawn",
    position: "A2",
    vector: new Vector2(0, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  10: {
    piece: "pawn",
    position: "B2",
    vector: new Vector2(1, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  11: {
    piece: "pawn",
    position: "C2",
    vector: new Vector2(2, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  12: {
    piece: "pawn",
    position: "D2",
    vector: new Vector2(3, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  13: {
    piece: "pawn",
    position: "E2",
    vector: new Vector2(4, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  14: {
    piece: "pawn",
    position: "F2",
    vector: new Vector2(5, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  15: {
    piece: "pawn",
    position: "G2",
    vector: new Vector2(6, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  16: {
    piece: "pawn",
    position: "H2",
    vector: new Vector2(7, 1),
    img: Pieces.wp,
    alt: "A white pawn",
    color: Colors.White,
  },

  17: {
    piece: "rook",
    position: "A8",
    vector: new Vector2(0, 7),
    img: Pieces.br,
    alt: "A black rook",
    color: Colors.Black,
  },

  18: {
    piece: "bishop",
    position: "B8",
    vector: new Vector2(1, 7),
    img: Pieces.bb,
    alt: "A black bishop",
    color: Colors.Black,
  },

  19: {
    piece: "knight",
    position: "C8",
    vector: new Vector2(2, 7),
    img: Pieces.bn,
    alt: "A black knight",
    color: Colors.Black,
  },

  20: {
    piece: "king",
    position: "D8",
    vector: new Vector2(3, 7),
    img: Pieces.bk,
    alt: "A black king",
    color: Colors.Black,
  },

  21: {
    piece: "queen",
    position: "E8",
    vector: new Vector2(4, 7),
    img: Pieces.bq,
    alt: "A black queen",
    color: Colors.Black,
  },

  22: {
    piece: "knight",
    position: "F8",
    vector: new Vector2(5, 7),
    img: Pieces.bn,
    alt: "A black knight",
    color: Colors.Black,
  },

  23: {
    piece: "bishop",
    position: "G8",
    vector: new Vector2(6, 7),
    img: Pieces.bb,
    alt: "A black bishop",
    color: Colors.Black,
  },

  24: {
    piece: "rook",
    position: "H8",
    vector: new Vector2(7, 7),
    img: Pieces.br,
    alt: "A black rook",
    color: Colors.Black,
  },

  25: {
    piece: "pawn",
    position: "A7",
    vector: new Vector2(0, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  26: {
    piece: "pawn",
    position: "B7",
    vector: new Vector2(1, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  27: {
    piece: "pawn",
    position: "C7",
    vector: new Vector2(2, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  28: {
    piece: "pawn",
    position: "D7",
    vector: new Vector2(3, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  29: {
    piece: "pawn",
    position: "E7",
    vector: new Vector2(4, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  30: {
    piece: "pawn",
    position: "F7",
    vector: new Vector2(5, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  31: {
    piece: "pawn",
    position: "G7",
    vector: new Vector2(6, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },

  32: {
    piece: "pawn",
    position: "H7",
    vector: new Vector2(7, 6),
    img: Pieces.bp,
    alt: "A black pawn",
    color: Colors.Black,
  },
};
