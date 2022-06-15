import React from 'react'
import Knight from './Pieces/Knight';



export default function Square(props) {

    let isWhite = true;

    if(props.squareNumber % 2 === 0) {
        isWhite = true
        return <div className='whiteSquare' id={props.squareId}></div>                
    }
    else{
        isWhite = false
        return <div className='blackSquare' id={props.squareId}><Knight isWhite={isWhite}/></div>          
    }
   /*  if(props.squareNumber % 2 === 0) {
        return <div className='whiteSquare' id={props.squareId}><img src='/Pieces/wp.png' alt='One square of the chessboard'/></div>                
    }
    else{
        return <div className='blackSquare' id={props.squareId}><img src='/Pieces/bk.png' alt='One square of the chessboard'/></div>          
    } */
}

