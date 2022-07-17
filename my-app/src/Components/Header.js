import React from "react";
import Board from "./Board";

const Header = () => {
  return (
    <header>
      <h2>Current player: {}</h2>
      <div>
        <Board />
      </div>
    </header>
  );
};

export default Header;
