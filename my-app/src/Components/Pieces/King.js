import React from 'react'

const King = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wk.png' alt='A white King'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bk.png' alt='A black King'></img>
          )
    }
}

export default King