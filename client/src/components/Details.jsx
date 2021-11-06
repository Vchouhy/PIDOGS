import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";


export default function Detail(props){
    console.log(props)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
    })

    const detailDog = useSelector((state)=> state.detail)

    return(
        <div>
            {
                detailDog.length > 0 ?
                <div>
                    <h1>{detailDog[0].name}</h1>
                    <img src = {detailDog[0].image} alt='img not found'/>
                    <h2>{!detailDog[0].createdInDb ? detailDog[0].temperament + ' ' : detailDog[0].temperament.map(e => e.name + (' '))}</h2>
                    <h2>{detailDog[0].minweight}{detailDog[0].maxweight}</h2>
                    <h2>{detailDog[0].minheight}{detailDog[0].maxheight}</h2>
                    <h2>{detailDog[0].life_span}{detailDog[0].life_span}</h2>
                </div> : <p>Loading...</p>
            }
            <Link to = '/home'>
                <button>Return home</button>
            </Link>
        </div> 
        )

}
