import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function Detail(props){
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(()=>{
        dispatch(getDetail(id));

    },[id,dispatch])

    const detailDog = useSelector((state)=> state.detail)
    console.log(detailDog)

    return(
        <div>
            {

                detailDog.length === 0 ? <p>Loading...</p> :
                detailDog.length > 0 &&
                <div>
                    <h1>Breed: {detailDog[0].name}</h1>
                    <img src = {detailDog[0].image} alt='img not found'/>
                    <h2>Temperaments: {!detailDog[0].createdInDb ? detailDog[0].temperament + ', ' : detailDog[0].temperament.map(e => e.name + (' '))}</h2>
                    <h2>Weight: {detailDog[0].minweight} kgs -  {detailDog[0].maxweight} kgs</h2>
                    <h2>Height: {detailDog[0].minheight} cm - {detailDog[0].maxheight} cm</h2>
                    <h2>Life Span: {detailDog[0].life_span}</h2>
                </div>
            }
            <Link to = '/home'>
                <button>Return home</button>
            </Link>
        </div> 
        )

}
