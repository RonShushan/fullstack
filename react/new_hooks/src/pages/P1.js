import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import './p.css'
import { GetRequest } from '../services/Api';
//rfce
//imrse


function P1() {
    const dispatch = useDispatch();
    // var num = 10;
    // var name = ""
    // var users = [];
    //https://jsonplaceholder.typicode.com/users
    // constructor(){
        //this.num = 50;
    // }

 
  const [num, setNum] = useState(1)
  const [name, setname] = useState("abc")
  //const [users, setusers] = useState([])
  const users = useSelector((state) => state.users);

  useEffect(() => {
    console.log("A3" , name)
    setname("shay");
    getUsers();
  }, []);

  const getUsers = async() =>{
    console.log("START LOAD")
    // let localUsers = await axios.get('https://jsonplaceholder.typicode.com/users');


    let localUsers = await GetRequest('users');
    let products = await GetRequest('products',0);
    let localUsers2 = await GetRequest('ynet',1);
    let localUsers3 = await GetRequest('ynet1',1);
    let localUsers4 = await GetRequest('ynet2',1);
 
    let fullObject = {
        users:localUsers,
        products:products
    }


    dispatch(
    {
        type: "FillUsers",
        payload: fullObject
    });


    dispatch(
    {
        type: "FillProducts",
        payload: products
    });



    // axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
    //     console.log("FINISH LOAD USERS")
    // })

    console.log("USERS : " , localUsers.data)
    // setusers(localUsers.data)
    
  }


  const updateNum = () =>{
    setNum(num+1);
  }
 
  const addToFav = (user) => { 
    dispatch(
        {
            type: "AddtoFavorite",
            payload: user
        });
  }
  
  //https://api.tvmaze.com/search/shows?q=girls
  console.log("-------------------")
  return (
    <div>
        {/* <div>{num}</div>
        <div>{name}</div>
        <div>{users.length > 0 && users[0].name }</div> */}
        <div className='row p-5'>
        {
            users.map((user,i)=>
                <div key={i} className="col-3 p-3">
                    <div className='box'>
                     <div>{user.name}</div>
                     <div>{user.email}</div>
                     <div>{user.phone}</div>
                     <div><button type='button' className='btn btn-primary' onClick={()=>addToFav(user)}>Add to Favorite</button> </div>
                    </div>
                </div>
            )
        }
        </div>

        {/* <button type='button' onClick={()=>updateNum()}>Change Num</button> */}
    </div>
  )
}

export default P1