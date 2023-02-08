import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom'
import axios from 'axios';
import SingleShow from '../components/SingleShow';

function Home() {
   const [pages, setshowPages] = useState([1,2,3]);
   const [Shows, setShows] = useState([]);
   const [TvMazeGetShowsUrl, setTvMazeGetShowsUrl] = useState('http://api.tvmaze.com/shows');
   
   useEffect(() => {
        getShows()
   }, []);

   const getShows = async()=>
   {
        const res = await axios.get(TvMazeGetShowsUrl);
        console.log(res.data);
        setShows(res.data);
   }

  return (
    <div>

        {
            Shows.map(show=><SingleShow show={show}></SingleShow>)
        }

        {/* map shows */}
        {/* <div>Home</div>
        <Link to={{pathname: "show/"+pages[0]}} >
            <button type="button" className="btn btn-primary">Show1</button>
        </Link>

        <Link to= {{pathname: "show/"+pages[1]}} >
            <button type="button" className="btn btn-primary">Show2</button>
        </Link>

        <Link to={{pathname: "show/"+pages[2]}} >
            <button type="button" className="btn btn-primary">Show3</button>
        </Link> */}
    </div>
  )
}

export default Home