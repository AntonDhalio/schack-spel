import React from 'react'

const Piece = (props) => {

    const image = props.src;
    return (
        <img id={props.id} src={props.src}></img>
    )
}

export default Piece