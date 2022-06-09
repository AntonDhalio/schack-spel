import React from 'react'


export default function Square(props) {
    if(props.squareNumber % 2 === 0) {
        return <div className='whiteSquare' id={props.squareId}><img src='/Pieces/wp.png' alt='One square of the chessboard'/></div>                
    }
    else{
        return <div className='blackSquare' id={props.squareId}><img src='/Pieces/bk.png' alt='One square of the chessboard'/></div>          
    }
}

