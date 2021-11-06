import React from "react";


export default function Card({image, name, temperament, minweight, maxweight, minheight, maxheight}){
    return(
        <div >
            <h3>{name}</h3>
  
            <h4>{temperament}</h4>

            <h4>min:{minweight} kg - max:{maxweight} kg</h4>
            <h4>min:{minheight} cm - max:{maxheight} cm</h4>

            <img  src = {image} alt = 'img not found' width = '10%' height = '10%'/>
        </div>
    )
}