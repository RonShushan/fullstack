import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'

function UseSelectorHooks() {
    const dispatch = useDispatch();

    const num = useSelector((state) => {
        return state.num
    });

    const users = useSelector((state) => {
        console.log("Users : ", state.users)
        return state.users
    });

    const color = useSelector((state) => {
        return state.color
    });

    useEffect(() => {
        getUsersFromServer();
    }, []);

    const getUsersFromServer = async() =>{
        console.log("tests : ", num, color);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(
            {
                    type: "FillUsers",
                    payload: res.data
            });
    }

    return (
        <div className="">
            <div className="rows">

            </div>
        </div>
    );
}
export default UseSelectorHooks;