import React from "react";
import logo from '../image.png';
 
import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";
import './Globalstyles.css';
export default function Navbar() {
 return (
   <div className="background">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 30 + '%'}} src={logo}></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li>
            <NavLink className="nav-link" to="/search">
              Search Record
            </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}