import React from "react";

import { Link } from "react-router-dom";
import LandingCss from './Landing.module.css'


export default function LandingPage(){
    return(
        <div className = {LandingCss.landing}>
            <h1 className = {LandingCss.h1}> 
                Welcome to my Dog's APP
            </h1>
            <Link to = '/home'>
                <button className = {LandingCss.btn}>Click to enter</button>
            </Link>
        </div>
    )
}