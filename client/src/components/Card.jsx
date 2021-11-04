import React from "react";


export default function Card({image, name, temperament, weight}){
    return(
        <div>
            <h3>{name}</h3>
            <h4>{temperament}</h4>
            <h4>{weight}</h4>
            <img src = {image} alt = 'img not found' width = '25%' height = '25%'/>;
        </div>
    )
}