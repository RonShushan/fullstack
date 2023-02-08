import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'

//ue - useEffect(() => {}, []);
//imrse - import React, { useState, useEffect } from 'react';
//rfce

function HooksRedux() {

    const dispatch = useDispatch();

    const num = useSelector((state) =>  { 
        console.log("NUM : " , state)
        return state.num
    });

    const color = useSelector((state) => state.color);

    const favorites = useSelector((state) =>  state.favorites);

    const users = useSelector((state) => {
        console.log("useSelector : " , state.users)
        return state.users
    });

    const changeNumber = (num) =>{
        // let action = {
        //     type: "ChangeNumber",
        //     payload: num
        // }
        dispatch({ type: "ChangeNumber",payload: num});
        dispatch({ type: "ChangeColor",payload: "BLUE"});
        //ChangeColor
    }

    useEffect(() => {
        
    }, []);

  return (
    <div>
        <div>HooksRedux {num} {color}</div>
        <button type="button" className="btn btn-primary" onClick={()=>changeNumber(30)}>ChangeNumber</button>
    </div>
  )
}

export default HooksRedux
