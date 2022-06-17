import React from 'react'

const Knight = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wn.png' alt='A white Knight'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bn.png' alt='A black Knight'></img>
          )
    }
}

export default Knight