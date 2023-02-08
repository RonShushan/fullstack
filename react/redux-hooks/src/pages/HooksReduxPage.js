//ue - useEffect(() => {}, []);
//imrse - import React, { useState, useEffect } from 'react';
//rfce

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'



function HooksReduxPage() {
  const [TvMazeUrl, setTvMazeUrl] = useState('http://api.tvmaze.com/shows');
  //const [Shows, setShows] = useState([]);
  const dispatch = useDispatch();
  
  //const shows = useSelector((state) => state.shows);

  const shows = useSelector((state) => {
    console.log('shows : ' , state.shows)
    return state.shows
  });

  useEffect(() => {
    console.log(shows)

    if(shows.length == 0)
    getShows();
  }, [shows]);

  const getShows = async() => {
    const res = await axios.get(TvMazeUrl)

    dispatch({
        type: "UpdateShowsArray",
        payload: res.data
    });
  }

  return (
    <div>
        {
            shows.map((show,index)=><div key={index}>{show.name}</div>)
        }
    </div>
  )
}

export default HooksReduxPage