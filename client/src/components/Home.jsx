//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { getAllDogs, filterCreated, orderAscDes, orderByWeight, filterDogsByTemperaments } from '../actions';
import { Link } from 'react-router-dom'
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";


export default function Home(){
    const dispatch = useDispatch(); // pasar a archivo nuevo
    const allDogs = useSelector((state) => state.searchDogs) //lo mismo que mapStateToProps - trae todo lo de actions
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1) // Local State save in a local state the current page (set to 1 bc is where we are rn)
    const [dogsPerPage, setDogsPerPage] = useState(8) // Local State set the amount of dogs required per page
    const indexOfLastDog = currentPage * dogsPerPage // 8 - local state. set the index of last dog - on the current pag * the amount of dogs p/page i need to know the last index of each card
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0 set the index of the first dog p/page
    const currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog) // va del 0 al 6 - this const saves which card needs to render in each page
    const temperamentos = useSelector((state) => state.temperament)


    const pagination = (pageNumber)=>{
        setCurrentPage(pageNumber)
        setDogsPerPage(dogsPerPage)
    }

    useEffect(()=>{
        dispatch(getAllDogs());
    },[dispatch])

    useEffect(()=>{
        dispatch(filterDogsByTemperaments());
    },[dispatch])


    function handleClick(event){
        event.preventDefault();
        dispatch(getAllDogs());
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderAscDes(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    function handleSortWeight(e){
        e.preventDefault()
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    function handleFilterTemperament(e){
        dispatch(filterDogsByTemperaments(e.target.value))
    }


    return(
        <div>
            <Link to = '/dogs/form'>Create a new dog!</Link>
            <h1>NO FUNCIONA NADA</h1>
            <button onClick = {e=>{handleClick(e)}}>
                Reload all dogs
            </button>
            <div> 
                <select onChange = {e => handleFilterCreated(e)}>
                    <option value = 'existent'>Api Breeds</option>
                    <option value = 'created'>Created Breeds</option>
                    <option value = 'allbreeds'>All Breeds</option>
                </select>
                <select onChange={e=> handleSortWeight(e)}> 
                    <option value = 'weightasc'>Weight Asc</option>
                    <option value = 'weightdes'>Weight Desc</option>
                </select>
    
                  <select onChange={(e) => handleFilterTemperament(e)}>
                    {temperamentos.map((temp) => (
                      <option value={temp.name} >
                        {temp.name}
                      </option>
                    ))}
                       
                  </select>
  
                <select onChange = {e => handleSort(e)}>
                    <option value = 'ascendent'>Ascendent</option>
                    <option value = 'descendent'>Descendent</option>
                </select>
                <Pagination dogsPerPage = {dogsPerPage} // props that needs the component to render properly
                            allDogs = {allDogs.length}
                            pagination = {pagination}
                />
                <SearchBar/>
             
                {currentDog?.map(dog=>{
                        return(
                        <div className = 'Imagen'>
                        <Link to={'/home/' + dog.id}>
                        <Card name = {dog.name} 
                              temperament = {dog.temperament ? dog.temperament : dog.temperament} 
                              minweight = {dog.minweight} 
                              maxweight = {dog.maxweight} 
                              minheight = {dog.minheight} 
                              maxheight = {dog.maxheight}
                              image = {dog.image ? dog.image : dog.image} 
                              key = {dog.id}
                        />
                        </Link>
                        </div>
                    )})
                }
               
            </div>
        </div>
    )

}

