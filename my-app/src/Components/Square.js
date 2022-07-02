import React from 'react'
import ListPieces from './ListPieces';
import Piece from './Piece';



export default function Square(props) {


    const startingPieces = [
        'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1',
        'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2',
        'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
        'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'
    ]
    for (let i = 0; i < startingPieces.length; i++) {
        if (startingPieces[i] === props.squareId) {

            if (props.squareNumber % 2 === 0) {
                return <div className='whiteSquare' id={props.squareId}><ListPieces squareId={props.squareId}/></div>
            }
            else {
                return <div className='blackSquare' id={props.squareId}><ListPieces squareId={props.squareId}/></div>
            }

        }
    }
        if (props.squareNumber % 2 === 0) {
            return <div className='whiteSquare' id={props.squareId}></div>
        }
        else {
            return <div className='blackSquare' id={props.squareId}></div>
        }
    
}

