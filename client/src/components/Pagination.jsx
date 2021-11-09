import React from "react";
import modules from './Pagination.module.css'

export default function Pagination({dogsPerPage, allDogs, pagination}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className = {modules.Pagination}>
                {pageNumber  && pageNumber.map(number =>{
                    return(
                    <li key = {number} className = 'Number'>
                    <button className = {modules.btna} onClick = {()=> pagination(number)} > {number} </button>
                    </li>)
                })}
            </ul>
        </nav>
    )
}