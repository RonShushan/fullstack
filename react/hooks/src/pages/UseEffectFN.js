//ue - useEffect(() => {}, []);
//imrse - import React, { useState, useEffect } from 'react';
//irce

import React, { useState, useEffect } from 'react';
import axios from 'axios'


function UseEffectFN() {

  const [Num, setNum] = useState(22);
  const [NumsArray, setNumsArray] = useState([1,2,3,4,5]);
  const [MyName, setMyName] = useState('abc');
  const [Users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  
  useEffect(() => {
     console.log("Num change : " , Num)
     console.log("Users : " , Users)
    
     if(Users.length ==0)
        getUsers()

  }, [Users,Num]);

  const getUsers = async() =>{
    setisLoading(true)
    const res = await axios.get('http://localhost:5000/users')
    setUsers(res.data.users)
    setisLoading(false)
    console.log("RES : " , res.data.users)
    // axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
    //     console.log("Result" , result)
    //     setUsers(result.data)
    // })

    console.log("Result from server" , Users)

  }

  return (
    <>  
        {isLoading && <div>Loading....</div>}
        <div>UseEffect</div>
        <button type='button' onClick={()=> setNum(Num+1)}>Add Number</button>
        <button type='button' onClick={()=>setMyName('shay')}>Change my Name</button>

        <div>
            {Num}
        </div>
        <div>
            {MyName}
        </div>

        {
           Users.map((user,i)=> <div key={i}>{user.name}</div>)
        }
    </>
  )
}

export default UseEffectFN
