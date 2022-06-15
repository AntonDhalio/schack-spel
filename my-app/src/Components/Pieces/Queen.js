import React from 'react'

const Queen = (props) => {
    if(props.isWhite === true){
        return (
            <img src='./Pieces/wq.png' alt='A white pawn'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bq.png' alt='A black pawn'></img>
          )
    }
}

export default Queen