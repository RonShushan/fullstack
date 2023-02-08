
import React, { useState, useEffect } from "react";
import {Link } from 'react-router-dom'

function SingleShow(props) {
  return (
    <>
        <Link to={{pathname: "show/"+props.show.id}} >
            <div className="m-1">
                <button type="button" className="btn btn-primary">{props.show.name}</button>
            </div>
        </Link>
    </>
  )
}

export default SingleShow