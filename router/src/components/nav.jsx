import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Nav(){
    return(
        <>
        <div className="nav">
            <div className="text">K A L V I U M 💙</div>
            <div className="nav-link">
            <Link to="/">Squad</Link>
            <Link to="/contact">Contacts</Link>
            <Link to="/About">About</Link>
            </div>
        </div>
        </>
    )
}