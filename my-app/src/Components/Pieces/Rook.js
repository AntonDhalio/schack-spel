import React from 'react'

const Rook = (props) => {
    if(props.isWhite === true){
        return (
            <img src='./Pieces/wr.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/br.png' alt='A black pawn'></img>
          )
    }
}

export default Rook