import React from "react";

const Piece = (props) => {
  // Anropa metod som han
  return (
    <img
      // onClick={props.onClick}
      className={props.piece}
      id={props.id}
      src={props.src}
      alt={props.alt}
    ></img>
  );
};

export default Piece;
