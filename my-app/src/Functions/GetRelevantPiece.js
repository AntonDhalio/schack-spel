export const getRelevantPiece = (squareId, piecePositions) => {
  for (let values of Object.entries(piecePositions)) {
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
};
