import React, { Component } from 'react';
import CubesFuncionComponent from './../components/CubesFuncionComponent';
class FullCubescomponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    cubeClicked = (color) => { 
        console.log("Color : " , color)
    }

    render() { 
        return ( 
            <div>
                 <CubesFuncionComponent index="0" ck={this.cubeClicked}/>
                 <CubesFuncionComponent index="1" ck={this.cubeClicked}/>
                 <CubesFuncionComponent index="2" ck={this.cubeClicked}/>
                 <CubesFuncionComponent index="3" ck={this.cubeClicked}/>
                 <CubesFuncionComponent index="4" ck={this.cubeClicked}/>
                 <CubesFuncionComponent index="5" ck={this.cubeClicked}/>
            </div>
         );
    }
}
 
export default FullCubescomponent;