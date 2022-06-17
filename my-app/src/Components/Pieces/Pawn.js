import React from 'react'

const Pawn = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wp.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bp.png' alt='A black pawn'></img>
          )
    }
}

export default Pawn