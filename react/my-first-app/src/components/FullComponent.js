import React, { Component } from 'react';

class FullComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                MyName is : {this.props.name}
                FULL component
            </div>
         );
    }
}
 
export default FullComponent;