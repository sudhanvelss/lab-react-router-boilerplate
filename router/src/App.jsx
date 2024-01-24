import React from "react";
import { BrowserRouter } from "react-router-dom";
import Allrountes from "./components/Allroutes";
import Nav from "./components/nav";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Allrountes/>
    </BrowserRouter>
    </>
  )
}