import React from 'react'

function TvCard(props) {

    
  return (
    <div className="col-3 mt-4">
        <div>
            <img src={props.image} alt="Card image cap" /> 
        </div>

        <div className='mt-3'>{props.name} </div>
        <div dangerouslySetInnerHTML={{__html: props.summary}} className="p-5"></div>

        <button type='button' className='btn btn-primary' onClick={()=>props.callBackFn(props.name)}>Console Name</button>
    </div>
  )
}

export default TvCard