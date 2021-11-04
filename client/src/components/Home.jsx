//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getAllDogs } from '../actions';
import { Link } from 'react-router-dom'
import Card from "./Card";
import Pagination from "./Pagination";

export default function Home(){
    const dispatch = useDispatch(); // pasar a archivo nuevo
    const allDogs = useSelector((state) => state.dogs) //lo mismo que mapStateToProps - trae todo lo de actions

    const [currentPage, setCurrentPage] = useState(1) // Local State save in a local state the current page (set to 1 bc is where we are rn)
    const [dogsPerPage, setDogsPerPage] = useState(8) // Local State set the amount of dogs required per page
    const indexOfLastDog = currentPage * dogsPerPage // 8 - local state. set the index of last dog - on the current pag * the amount of dogs p/page i need to know the last index of each card
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0 set the index of the first dog p/page
    const currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog) // va del 0 al 6 - this const saves which card needs to render in each page

    const pagination = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getAllDogs());
    },[dispatch])

    function handleClick(event){
        event.preventDefault();
        dispatch(getAllDogs());
    }

    return(
        <div>
            <Link to = '/dogs'>Create a new dog!</Link>
            <h1>veamos que onda</h1>
            <button onClick = {e=>{handleClick(e)}}>
                Reload all dogs
            </button>
            <div> 
                <select>
                    <option value = 'existent'>Api Breeds</option>
                    <option value = 'created'>Created Breeds</option>
                    <option value = 'all breeds'>All Breeds</option> 
                    <option value = 'temperament'>Temperament</option>
                    <option value = 'weight'>Weight</option>

                </select>
                <select>
                    <option value = 'ascendent'>Ascendent</option>
                    <option value = 'descendent'>Descendent</option>
                </select>
                <Pagination dogsPerPage = {dogsPerPage} // props that needs the component to render properly
                            allDogs = {allDogs.length}
                            pagination = {pagination}
                />
                
                {currentDog?.map(dog=>{
                        return(
                        <fragment>
                        <Link to={'/home/' + dog.id}>
                        <Card name = {dog.name} 
                              temperament = {dog.temperament} 
                              weight = {dog.weight} 
                              image = {dog.image} 
                              key = {dog.id}
                        />
                        </Link>
                        </fragment>
                    )})
                }
            </div>
        </div>
    )

}

