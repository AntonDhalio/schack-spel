import React from "react";

const Piece = ({ piece, id, src, alt }) => {
  return <img className={piece} id={id} src={src} alt={alt}></img>;
};

export default Piece;
