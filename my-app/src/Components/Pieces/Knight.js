import React from 'react'

const Knight = (props) => {
    if(props.isWhite === true){
        return (
            <img src='./Pieces/wn.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bn.png' alt='A black pawn'></img>
          )
    }
}

export default Knight