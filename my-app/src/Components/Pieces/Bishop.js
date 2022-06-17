import React from 'react'

const Bishop = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wb.png' alt='A white Bishop'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bb.png' alt='A black Bishop'></img>
          )
    }
}

export default Bishop