import React from 'react'

const ListPieces = (props) => {

    const squares = [
      {
        id: 'A1',
        piece: 'Rook',
        color: 'white'
      },
      {
        id: 'A2',
        piece: 'Knight',
        color: 'white'
      },
      {
        id: 'A3',
        piece: 'Bishop',
        color: 'white'
      },
      {
        id: 'A4',
        piece: 'King',
        color: 'white'
      },
      {
        id: 'A5',
        piece: 'Queen',
        color: 'White'
      },
      {
        id: 'A6',
        piece: 'Bishop',
        color: 'White'
      },
      {
        id: 'A7',
        piece: 'Knight',
        color: 'White'
      },
      {
        id: 'A8',
        piece: 'Rook',
        color: 'White'
      }
    ]

    const square = squares.filter(square => square.id === props.id).map(s => ({piece: s.piece, color: s.color}))
  /* const squareInfo = squares.map(squares => <Square key={squares.id} squares={squares}/>) */

  return (
    <div>{squares.filter(square => square.id === props.id).map(s => ({piece: s.piece, color: s.color}))}</div>
  )
}

export default ListPieces

