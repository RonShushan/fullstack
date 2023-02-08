import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    name = "";
    mail = "";

    onChangeFn = (event) =>{
        if(event.target.id == 'name')
            this.name = event.target.value;
        if(event.target.id == 'mail')
            this.mail = event.target.value; 

        console.log("Val : " , this.name , this.mail)
    }


    onSubmit = () => {
        console.log(this.name , this.mail)
        let user = {
            name:this.name,
            mail:this.mail
        }

        this.props.AddUser({name:this.name,mail:this.mail});
    }

    render() { 
        return (
            <>
                <div  style={{textAlign:'left'}}>
                    <form className='p-5'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text"  onChange={(e)=>this.onChangeFn(e)}  className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input type="text" className="form-control" onChange={(e)=>this.onChangeFn(e)} id="mail"  placeholder="Enter Email" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={()=>this.onSubmit()}>Submit</button>
                    </form>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps")
    return {
        AddUser(user){
            dispatch({
                type:"AddUser",
                payload:user
            })
        }
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Form);