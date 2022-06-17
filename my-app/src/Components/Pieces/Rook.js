import React from 'react'

const Rook = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wr.png' alt='A white Rook'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/br.png' alt='A black Rook'></img>
          )
    }
}

export default Rook