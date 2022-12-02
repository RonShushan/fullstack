import React from 'react'

function FunctionComponent(props) {
    return ( 
        <div className="card mainCard" >
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.description}</p>
                <a href="#" className="btn btn-primary">Button of {props.title}</a>
            </div>
        </div>
    );
}

export default FunctionComponent
