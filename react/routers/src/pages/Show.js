import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { SimpleConsoleLogger } from "typeorm";

function Show() {
    const [ShowId, setShowId] = useState(0);
    const { id } = useParams();
  

    useEffect(() => {
        
    }, []);

  return (
    <div> SHOW : {id}</div>
  )
}

export default Show