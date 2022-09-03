import React from "react";

const Piece = (props) => {
  return (
    <img
      className={props.piece}
      id={props.id}
      src={props.src}
      alt={props.alt}
    ></img>
  );
};

export default Piece;
