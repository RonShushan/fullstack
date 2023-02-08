import React from 'react'
import './card.css'

function Usercard(props) {
  return (
    <div className="col-3 mt-4 userCardContainer" style={{backgroundColor : props.user.selected ? "gray" : "white"}}>
        <div className='mt-3'>{props.user.email} </div>
        <div className='mt-3'>{props.user.password} </div>
        <div className='mt-3'>{String(props.user.selected)} </div>
        <button type='button' className='btn btn-primary mt-2' onClick={()=>props.callBackFN(props.index)}>Select</button>
    </div>
  )
}

export default Usercard