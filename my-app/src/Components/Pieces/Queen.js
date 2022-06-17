import React from 'react'

const Queen = (props) => {
    if(props.color === 'White'){
        return (
            <img src='./Pieces/wq.png' alt='A white Queen'></img>
          ) 
    }
    else{
        return (
            <img src='./Pieces/bq.png' alt='A black Queen'></img>
          )
    }
}

export default Queen