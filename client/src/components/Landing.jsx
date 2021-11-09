import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/styledcomponents/StyledComponents";

export default function LandingPage(){
    return(
        <div>
            <h1>
                Welcome to my Dog's APP
            </h1>
            <Link to = '/home'>
                <Button>Click to enter</Button>
            </Link>
        </div>
    )
}