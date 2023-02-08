import React, { Component } from 'react';
import Usercard from '../../components/Usercard';

class Forms extends Component {

    name = "";
    mail="";

    state = { 
        email:"",
        password:"",
        showDetails:false,
       
        users:[
            {
                email:"t1@gmail.com",
                password:"1234",
                selected:false,
            },
            {
                email:"t2@gmail.com",
                password:"1234",
                selected:false,
            },
            {
                email:"t3@gmail.com",
                password:"1234",
                selected:false,
            }
        ],
     }

    constructor(props) {
        super(props);
    }

   

    onChangeFn(e){
        console.log("Event : " , e.target.id , e.target.value)
        //let val = e.target.id == "email" ?   this.setState({ email: e.target.value }) : e.target.id == "password" ?   this.setState({ password: e.target.value }) : this.setState({ password: "no value" })
        
        if(e.target.id == "email")
            this.mail =e.target.value;
        //    this.setState({email:e.target.value})
        if(e.target.id == "password")
            this.setState({password:e.target.value})
    }

    onSubmit(){
        let user = {
            email:this.state.email,
            password:this.state.password,
            selected:false
        }

        let usersArray = this.state.users;
        usersArray.push(user)

        this.setState({users:usersArray , email:"", password:"" })
        console.log(this.state.users)
        // add object to users array
        // this.setState({showDetails:!this.state.showDetails})
        // console.log(this.state.email , this.state.password)
    }


    setSelectedCard = (index) =>{
        console.log("INDEX : " , index)
        let users = this.state.users;
        users[index].selected = !users[index].selected

        this.setState({users:users})
        console.log("USERS : " , users)
    }

    render() { 
        return ( 
            <>
                <div className='row p-5' style={{textAlign:'left'}}>
                    <form className='col-5'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email"  onChange={(e)=>this.onChangeFn(e)}  className="form-control" id="email" value={this.state.email} aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={(e)=>this.onChangeFn(e)} id="password" value={this.state.password} placeholder="Password" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={()=>this.onSubmit()}>Submit</button>
                    </form>

                    {this.state.showDetails == true && <div className='col-5'>
                        <div>{this.state.email}</div>
                        <div>{this.state.password}</div>
                    </div> }
                    {/* map of users */}
                </div>

                <div className='row m-5'>
                    { this.state.users.map((user,index) => { return <Usercard key={index} user={user} index = {index} callBackFN={this.setSelectedCard} />}) }
                </div>
               
            </>
         );
    }
}
 
export default Forms;