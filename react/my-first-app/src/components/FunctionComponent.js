import React, { Component } from 'react';


function FunctionComponent(props) {
    return ( 
        <div>
            functionComponent {props.name}
            <button type='button' className='btn btn-primary' onClick={()=>props.fn()}>function Component</button>
        </div>
     );
}

export default FunctionComponent;