import React from 'react'
import Board from './Board';
import { useState } from 'react';

const Header = () => {

  const [active, setActive] = useState("default");

  return (
      <header>
          <button onClick={() => setActive("active")}>Start game</button>
          <div>
            {active === "default"}
            {active === "active" && <Board />}
          </div>
      </header>
  )
}


export default Header