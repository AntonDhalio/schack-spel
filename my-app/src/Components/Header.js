import React from 'react'

const Header = () => {

  const handleClick = () => {
    console.log('Time to start!');
  }

  return (
      <header>
          <button onClick={handleClick}>Start game</button>
      </header>
  )
}

export default Header