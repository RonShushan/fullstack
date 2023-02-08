import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import './p.css'
import { GetRequest } from '../services/Api';



function Users() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    

    const onSubmit = async() => {
        //http://localhost:5000/addUser?name=zzzz&phone=1236786
        let res = await GetRequest(`addUser?name=${name}&phone=${phone}&mail=${mail}`)

        
        console.log("RES : " , res)
    }

  return (
    <>
        <div className='row p-5' style={{textAlign:'left'}}>
            <form className='col-5'>
                <div className="form-group">
                    <label>Add Name</label>
                    <input type="text"  onChange={(e)=>setName(e.target.value)}  className="form-control" id="model"  placeholder="Enter model" />
                </div>

                <div className="form-group">
                    <label>Add phone</label>
                    <input type="text"  onChange={(e)=>setPhone(e.target.value)}  className="form-control" id="model"  placeholder="Enter color" />
                </div>

                <div className="form-group">
                    <label>Add Mail</label>
                    <input type="text"  onChange={(e)=>setMail(e.target.value)}  className="form-control" id="model"  placeholder="Enter year" />
                </div>

                <button type="button" className="btn btn-primary" onClick={()=>onSubmit()}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Users