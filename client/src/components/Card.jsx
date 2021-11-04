import React from "react";


export default function Card({image, name, temperament, min_weight, max_weight}){
    return(
        <div>
            <h3>{name}</h3>
            <h4>{temperament}</h4>
            <h4>min:{min_weight} kg - max:{max_weight} kg</h4>
            <br/>
            <img src = {image} alt = 'img not found' width = '25%' height = '25%'/>
        </div>
    )
}