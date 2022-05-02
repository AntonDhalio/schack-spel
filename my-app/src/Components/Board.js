import React from 'react'
import './Board.css'

const Board = () => {
  return (
    <table className='no-border'>
      <thead>
        <tr className='upside-down'><th></th><th>H</th><th>G</th><th>F</th><th>E</th><th>D</th><th>C</th><th>B</th><th>A</th><th></th></tr>
      </thead>
      <tbody>
        <tr><th>8</th><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><th className='upside-down'>8</th></tr>
        <tr><th>7</th><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><th className='upside-down'>7</th></tr>
        <tr><th>6</th><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><th className='upside-down'>6</th></tr>
        <tr><th>5</th><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><th className='upside-down'>5</th></tr>
        <tr><th>4</th><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><th className='upside-down'>4</th></tr>
        <tr><th>3</th><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><th className='upside-down'>3</th></tr>
        <tr><th>2</th><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><th className='upside-down'>2</th></tr>
        <tr><th>1</th><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><td className='square-dark'></td><td className='square-light'></td><th className='upside-down'>1</th></tr>
      </tbody>
      <tfoot>
        <tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th></th></tr>
      </tfoot>
    </table>
  )
}

export default Board