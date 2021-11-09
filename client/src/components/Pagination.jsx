import React from "react";

export default function Pagination({dogsPerPage, allDogs, pagination}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className = 'Pagination'>
                {pageNumber  && pageNumber.map(number =>{
                    return(
                    <li key = {number} className = 'Number'>
                    <button onClick = {()=> pagination(number)} > {number} </button>
                    </li>)
                })}
            </ul>
        </nav>
    )
}