import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperaments } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function CreateDog(){
    const dispatch = useDispatch();
    const history = useHistory();
    let types = useSelector((state) => state.temperaments);
    let [input, setInput] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        temperaments: [],
        image: '',
    })

  
    const render = (types)=>{
        let temperamentos = types?.map((types)=>{
                return (
                <option value = {types.name}> {types.name} </option>
                )

        })
        return temperamentos        
    } 

    function handleChange(d){
        setInput({
            ...input,
            [d.target.name] : d.target.value
        })
    }

    function handleSelect(d){
        setInput({
            ...input,
            temperaments: [...input.temperaments, d.target.value]
        })
    }

    function handleSubmit(d){
        d.preventDefault();
        dispatch(postDog(input))
        alert('Dog created succesfully!')
        setInput({
            name: '',
            min_height: '',
            max_height: '',
            min_weight: '',
            max_weight: '',
            temperaments: [],
            image: '',
        })
        history.push('/home') // te lleva a la ruta indicada
    }

    // let prueba = temperaments.map((temp)=>(
    //     <option value={temp.name}>{temp.name}</option>
    // ))


    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div>
            <Link to = '/home'> 
                <button>Return</button>
            </Link>
                <h2>Create your own dog!</h2>
                <form
                    onSubmit = {(d) =>handleSubmit(d)}>
                    <div>
                        <label>Breed:</label>
                        <input type= 'text'
                               value= {input.name}
                               name= 'name'
                               onChange = {(d)=>handleChange(d)}/>     
                    </div>
                    <div>
                        <label>Min Height:</label>
                        <input type= 'number'
                                value= {input.min_height}
                                name= 'min height'
                                onChange = {(d)=>handleChange(d)}/>
                    </div>
                    <div>
                        <label>Max Height:</label>
                        <input type= 'number'
                                value= {input.max_height}
                                name= 'max height'
                                onChange = {(d)=>handleChange(d)}/>
                    </div>
                    <div>
                        <label>Min weight:</label>
                        <input type= 'number'
                                value= {input.min_weight}
                                name= 'min weight'
                                onChange = {(d)=>handleChange(d)}/>
                    </div>
                    <div>
                        <label>Max weight:</label>
                        <input type= 'number'
                                value= {input.max_weight}
                                name= 'max weight'
                                onChange = {(d)=>handleChange(d)}/>
                    </div>
                    <div>
                        <label>Image:</label>
                        <label>
                        <input type= 'text'
                                value= {input.image}
                                name= 'image'
                                onChange = {(d)=>handleChange(d)}/>
                        </label>
                    </div>

                    <select onChange = {(d)=>handleSelect(d)}>
                      {render(types)}   
                      </select>  
                      <ul key=''>
                          <li key=''>{input.temperaments?.map(d => d + ', ')}
                          {console.log(input.temperaments)}
                          </li>
                        </ul>
                    <button type = 'submit'>Create dog</button>
                </form>
        </div>
    )
}
