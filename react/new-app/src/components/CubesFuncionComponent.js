import React from 'react'
import './cube.css'

function CubesFuncionComponent(props) {
  var colors = ["red","green","yellow","gray","orange","brown"]

  return (
    <div className='cube' style={{backgroundColor : colors[props.index]}} onClick={()=>props.ck(colors[props.index])}>
        {colors[props.index]}
    </div>
  )
}

export default CubesFuncionComponent