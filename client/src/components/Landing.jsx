import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
            <h1>
                Welcome to my Dog's APP
            </h1>
            <Link to = '/home'>
                <button>Click to enter</button>
            </Link>
        </div>
    )
}