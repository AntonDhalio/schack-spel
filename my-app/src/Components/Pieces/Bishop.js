import React from 'react'

const Bishop = (props) => {
    if(props.isWhite === true){
        return (
            <img src='./Pieces/wb.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bb.png' alt='A black pawn'></img>
          )
    }
}

export default Bishop