import React, { Component } from 'react';

class ShowComponent extends Component {

    state = { 
        name:"shay",
        mail:"",
        phone:"",
        movies:[]
    }

    ob = {
        name:"OBname"
    }


    constructor(props) {
        super(props);
    }
   

    changeMyName(){
        //this.state.name = "avigail";
        this.setState({name:"avigail"})
        //this.ob = {firstname:"shay"}
        //this.ob.name = "Ob123"
        //printToHtml();
        console.log("My name is : " , this.state , this.ob)
    }

    render() { 
        return ( 
            <div>
                <button type='button' className='btn-primary' onClick={()=>this.changeMyName()}> Change Name</button>
                <div>My Name is {this.state.name}</div>
                <div>My Name is {this.ob.name}</div>
            </div>
         );
    }
}
 
export default ShowComponent;