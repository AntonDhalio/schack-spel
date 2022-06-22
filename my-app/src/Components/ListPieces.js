import React from 'react'
import Piece from './Piece'

const ListPieces = (props) => {

  /* istället för en array gör en dictionary med en array i sig, gör även om pjäserna till en component */
    
     var dictPieces = {
      1: [{id: 1, startingPosition: 'A1', img: './Pieces/wr.png'}],
      2: [{id: 2, startingPosition: 'B1', img: './Pieces/wb.png'}],
      3: [{id: 3, startingPosition: 'C1', img: './Pieces/wn.png'}],
      4: [{id: 4, startingPosition: 'D1', img: './Pieces/wk.png'}],
      5: [{id: 5, startingPosition: 'E1', img: './Pieces/wq.png'}],
      6: [{id: 6, startingPosition: 'F1', img: './Pieces/wn.png'}],
      7: [{id: 7, startingPosition: 'G1', img: './Pieces/wb.png'}],
      8: [{id: 8, startingPosition: 'H1', img: './Pieces/wr.png'}],
      9: [{id: 9, startingPosition: 'A2', img: './Pieces/wp.png'}],
      10: [{id: 10, startingPosition: 'B2', img: './Pieces/wp.png'}],
      11: [{id: 11, startingPosition: 'C2', img: './Pieces/wp.png'}],
      12: [{id: 12, startingPosition: 'D2', img: './Pieces/wp.png'}],
      13: [{id: 13, startingPosition: 'E2', img: './Pieces/wp.png'}],
      14: [{id: 14, startingPosition: 'F2', img: './Pieces/wp.png'}],
      15: [{id: 15, startingPosition: 'G2', img: './Pieces/wp.png'}],
      16: [{id: 16, startingPosition: 'H2', img: './Pieces/wp.png'}],
      17: [{id: 17, startingPosition: 'A8', img: './Pieces/br.png'}],
      18: [{id: 18, startingPosition: 'B8', img: './Pieces/bb.png'}],
      19: [{id: 19, startingPosition: 'C8', img: './Pieces/bn.png'}],
      20: [{id: 20, startingPosition: 'D8', img: './Pieces/bk.png'}],
      21: [{id: 21, startingPosition: 'E8', img: './Pieces/bq.png'}],
      22: [{id: 22, startingPosition: 'F8', img: './Pieces/bn.png'}],
      23: [{id: 23, startingPosition: 'G8', img: './Pieces/bb.png'}],
      24: [{id: 24, startingPosition: 'H8', img: './Pieces/br.png'}],
      25: [{id: 25, startingPosition: 'A7', img: './Pieces/bp.png'}],
      26: [{id: 26, startingPosition: 'B7', img: './Pieces/bp.png'}],
      27: [{id: 27, startingPosition: 'C7', img: './Pieces/bp.png'}],
      28: [{id: 28, startingPosition: 'D7', img: './Pieces/bp.png'}],
      29: [{id: 29, startingPosition: 'E7', img: './Pieces/bp.png'}],
      30: [{id: 30, startingPosition: 'F7', img: './Pieces/bp.png'}],
      31: [{id: 31, startingPosition: 'G7', img: './Pieces/bp.png'}],
      32: [{id: 32, startingPosition: 'H7', img: './Pieces/bp.png'}],
    }; 
         
    for (let values of Object.values(dictPieces)){
      for(let value of Object.values(values)){
        console.log(value.img, props.squareId)
        if(value.startingPosition === props.squareId){
          return <Piece id={value.id} src={value.img}/>
        }
      }
    }


    return <div></div>   
       
}

export default ListPieces

