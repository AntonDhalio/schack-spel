import React from 'react'

const King = (props) => {
    if(props.isWhite === true){
        return (
            <img src='./Pieces/wk.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bk.png' alt='A black pawn'></img>
          )
    }
}

export default King