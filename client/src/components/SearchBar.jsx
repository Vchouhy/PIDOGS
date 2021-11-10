import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getDogsByName } from '../actions';
import SearchBarCss from "./SearchBar.module.css"

export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName ] = useState('')

    function onChange(e){
        console.log(name)
        e.preventDefault()
        setName(e.target.value); 
    }

    function handleSubmit(e){

        e.preventDefault();
        dispatch(getDogsByName(name))
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="Enter breed..."
            onChange={(e) => onChange(e)}
            className={SearchBarCss.select}
            />
            <button className={SearchBarCss.button}type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>)
}

