import React from 'react'
import Rook from './Pieces/Rook';
import Bishop from './Pieces/Bishop';
import Knight from './Pieces/Knight';
import King from './Pieces/King';
import Queen from './Pieces/Queen';
import Pawn from './Pieces/Pawn';

const AddPiece = (props) => {

    if(props.squareId === 'A8' || props.squareId === 'H8'){
        return (
            <Rook color='Black'/>
          )
    }
    else if(props.squareId === 'B8' || props.squareId === 'G8'){
        return (
            <Bishop color='Black'/>
          )
    }
    else if(props.squareId === 'C8' || props.squareId === 'F8'){
        return (
            <Knight color='Black'/>
          )
    }
    else if(props.squareId === 'D8'){
        return (
            <King color='Black'/>
          )
    }
    else if(props.squareId === 'E8'){
        return (
            <Queen color='Black'/>
          )
    }
    else if(props.squareId === 'A1' || props.squareId === 'H1'){
        return (
            <Rook color='White'/>
          )
    }
    else if(props.squareId === 'B1' || props.squareId === 'G1'){
        return (
            <Bishop color='White'/>
          )
    }
    else if(props.squareId === 'C1' || props.squareId === 'F1'){
        return (
            <Knight color='White'/>
          )
    }
    else if(props.squareId === 'D1'){
        return (
            <King color='White'/>
          )
    }
    else if(props.squareId === 'E1'){
        return (
            <Queen color='White'/>
          )
    }
    else if(props.squareId === 'A2' || props.squareId === 'B2' || props.squareId === 'C2' || props.squareId === 'D2' || props.squareId === 'E2' || props.squareId === 'F2' || props.squareId === 'G2' || props.squareId === 'H2'){
        return (
            <Pawn color='White'/>
          )
    }
    else if(props.squareId === 'A7' || props.squareId === 'B7' || props.squareId === 'C7' || props.squareId === 'D7' || props.squareId === 'E7' || props.squareId === 'F7' || props.squareId === 'G7' || props.squareId === 'H7'){
        return (
            <Pawn color='Black'/>
          )
    }
    else{
        return undefined;
    }

}

export default AddPiece