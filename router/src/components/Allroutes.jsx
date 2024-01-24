import React from "react";
import {Routes, Route} from "react-router-dom"
import Squad51 from "./Squad51";
import Contact from "./Contact";
import About from "./About";
import "../App.css"

export default function Allrountes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Squad51/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        </>
    )
}