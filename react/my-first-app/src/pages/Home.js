import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    //JS Start
    num = 10;
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
        console.log("Name : " , this.state.name )

        if(this.num > 10){

        }
    }
    
    changeMyName(){
        this.setState({name:"avigail"})
        //this.state.name = "avigail";
        //this.ob.name = "Ob123"
        //printToHtml();
        console.log("My name is : " , this.state , this.ob)
    }

    //HTML Start
    render() { 
        return ( 
            <div className='p-5'>
               <button type='button' className='btn-primary' onClick={()=>this.changeMyName()}> Change Name</button>
               <div>My Name is {this.state.name}</div>
               <div>My Name is {this.ob.name}</div>
            </div>
        );
    }
}
 
export default Home;