import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";




function Favorite() {
  const favorites = useSelector((state) => {
    console.log("FAV : " ,state.favorites )
    return state.favorites});
  const dispatch = useDispatch();

  const removeFav = (fav)=>{
    dispatch(
        {
            type: "DeleteFavorite",
            payload: fav.id
        });
  }

  return (
    <div>
        {
            favorites.map(fav=><div><button type='button' className='btn btn-primary mt-2' onClick={()=>removeFav(fav)}>Delete {fav.name}</button></div>)
        }
    </div>
  )
}

export default Favorite