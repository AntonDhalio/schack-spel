import React from 'react'

const Piece = (props) => {

    let image = props.src;

    const style = {
        backgroundImage: `url(${image})`
    }

   /*  if (props.id) { */
        return (
/*             <img className='chessPiece' id={props.id} src={props.src} alt={props.alt}></img>
 */            <div style={style} className="chessPiece"></div>
        )
    /* } */
    /* else{
        return (
            <img className='chessPiece' id='43' src='./Pieces/bp.png' alt='A black pawn' style={style}></img>
        )
    } */
}

export default Piece