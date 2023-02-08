import React, { useState } from 'react';
import axios from 'axios'
//imrs
//rfce

function UseStateText() {
  const [User, setUser] = useState({name:"",mail:"",phone:""});
  const [Users, setUsers] = useState([]);
  

  return (
    <>
        <div className='row'>
            <div className='col-3'>
                <div>Add User Form</div>
                <input type="text" placeholder="Enter name" onChange={(e)=>setUser({ ...User, name: e.target.value })}/>
                <input type="text" className='mt-2' placeholder="Enter mail" onChange={(e)=>setUser({ ...User, mail: e.target.value })}/>
                <input type="text" className='mt-2' placeholder="Enter phone" onChange={(e)=>setUser({ ...User, phone: e.target.value })}/>
                <div>
                    <button type='button' className='btn btn-primary mt-2' onClick={()=>{
                        setUsers([...Users,User])
                        

                        //  let u = [...Users].splice(i);
                        //  setUsers([...Users].splice(i))
                    }}>Add User</button>
                </div>    
            </div>
            <div className='col-9'>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col">phone</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                   { Users.map((user,i)=> 
                    <tr key={i}>
                        <th>{user.name}</th>
                        <td>{user.mail}</td>
                        <td>{user.phone}</td>
                        <td> <button type='button' className='btn btn-primary mt-2' onClick={()=> {
                            let u = [...Users];
                            u.splice(i,1)
                            setUsers(u)
                            //setUsers([...Users,[...Users].splice(i,1)])
                        }
                            
                            }>Delete</button></td>
                    </tr> 
                ) }
                </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default UseStateText