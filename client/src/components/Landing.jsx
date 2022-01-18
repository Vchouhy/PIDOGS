import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import LandingCss from './Landing.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, getDetail } from "../actions";

export default function LandingPage(){
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs) 
    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getTemperaments());
        dispatch(getDetail())
    })

    return(
        <div className = {LandingCss.landing}>
            {
            allDogs.length === 0 ?
            <div>
                <h1 className = {LandingCss.h1}>Loading...</h1>
            </div> :
            <div><h1 className = {LandingCss.h1}> 
            Welcome to my Dog's APP
            </h1>
            <Link to = '/home'>
            
                <button className = {LandingCss.btn}>Click to enter</button>
            </Link>
            </div>
            }
        </div>
    )
}