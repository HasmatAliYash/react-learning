import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import {isAuthenticate} from "./LoginComponent"

const Privateroute = () =>{

    let loggedIn = false;
    return loggedIn ?  <Outlet/> : <Navigate to = {"/login"}/>
   
}

export default Privateroute