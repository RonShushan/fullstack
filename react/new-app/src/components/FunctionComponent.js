import React from 'react'
//rfce
function FunctionComponent(props) {
    var colors = ["red","green","yellow","gray","orange","brown"]
    return ( 
        <div className="card mainCard"  style={{backgroundColor : colors[props.index]}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.description}</p>
                <a href="#" className="btn btn-primary" onClick={()=>props.cardClickedFn(props.index)}> Button of {props.title}</a>
            </div>
        </div>
    );
}

export default FunctionComponent
