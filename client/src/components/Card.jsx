import React from "react";
import CardCss from './Card.module.css'
import { Link } from 'react-router-dom'
import { getDetail } from "../actions";
import { useDispatch} from 'react-redux';


export default function Card({image, name, temperament, minweight, maxweight, minheight, maxheight, id}){
    const dispatch = useDispatch();
    return(
             <Link className = {CardCss.link} to={'/home/' + id} onClick={()=>dispatch(getDetail(id))}> 
        <div className={CardCss.card}>
            <h2 className={CardCss.title}>{name}</h2>
            <h5 className={CardCss.temperament}>Temperament: {Array.isArray(temperament)? temperament.join(', ' ) : temperament}</h5>
            <div className= {CardCss.divimagen}>
            <img  className = {CardCss.img} src = {image} alt = 'img not found' />
            </div>
            <h5 className={CardCss.weight}>Min weight:{minweight} kg - Max weight:{maxweight} kg</h5>
            <h5 className={CardCss.weight}>Min weight:{minheight} cm - Max weight:{maxheight} cm</h5>
        </div>
            </Link>
    )
}