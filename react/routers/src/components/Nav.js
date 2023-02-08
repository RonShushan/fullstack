import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import './componentsCss.css'
function Nav() {
  const [currentPage, setCurrentPage] = useState(1);
    
  return (
    <div className="NavBarcontainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className={currentPage == 1 ? "nav-item active" : "nav-item"}>
                    <div className="nav-link" onClick={()=>setCurrentPage(1)}> <Link to="/">Home</Link></div>
                </li>
                <li className={currentPage == 2 ? "nav-item active" : "nav-item"}>
                    <div className="nav-link" onClick={()=>setCurrentPage(2)}><Link to="/about">About</Link> </div>
                </li>
                <li className={currentPage == 3 ? "nav-item active" : "nav-item"}>
                    <div className="nav-link" onClick={()=>setCurrentPage(3)}><Link to="/contact">Contact</Link> </div>
                </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Nav