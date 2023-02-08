import React, { Component } from 'react'
import FullComponent from '../components/FullComponent';
import FunctionComponent from '../components/FunctionComponent';
import './Home.css'
import axios from 'axios';

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


    // constructor(props) {
    //     super(props);
    //     console.log("Name : " , this.state.name )

    //     if(this.num > 10){

    //     }
    // }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          console.log(res.data)
        })

        this.getPlaceHolder()
    }

    getPlaceHolder = async() =>{
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log("RESSSS : " , res.data)
    }
    
    changeMyName(){
        this.setState({name:"avigail"})
        //this.state.name = "avigail";
        //this.ob.name = "Ob123"
        //printToHtml();
        console.log("My name is : " , this.state , this.ob)
    }

    functionComponentClicked(){
        console.log("Function Component Clicked")
    }

    render() { 
        return ( 
            <div className='p-5'>
               <FullComponent name={this.ob.name}></FullComponent>
               <FunctionComponent name = {this.state.name} fn={this.functionComponentClicked} ></FunctionComponent>
            </div>
        );
    }
}
 
export default Home;