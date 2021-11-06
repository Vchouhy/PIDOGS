import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperaments } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";


function validate(input){
    let error = {};
    if(!input.name){
        error.name = 'Name is required'
    }
    if(!input.minheight){
        error.minheight = 'Minimum height is required'
    }
    if(input.minheight <= 8){
        error.minheight = 'Height must be 9 or greater than 9'
    }
    if(!input.maxheight){
        error.maxheight = 'Minimum height is required'
    }
    if(input.maxheight >=121){
        error.maxheight = 'Height must be smaller than 120cm'
    }
    if(!input.minweight){
        error.minweight = 'Minimum weight is required'
    }
    if(!input.maxweight){
        error.maxweight = 'Maximum weight is required'
    }
    if(input.minweight <=0.9){
        error.minweight = 'Minimum weight 1'
    }
    if(input.maxweight >=111){
        error.maxweight = 'Maximum weight is 110'
    }
    if(!input.temperaments){
        error.temperaments = 'Temperaments is required'
    }
    if(!input.image){
        error.image = 'Image is required'
    }
    if(!input.life_span){
        error.life_span = 'Life span is required'
    }
    return error;
}

export default function CreateDog(){
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.temperaments);
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        minheight: 9,
        maxheight: 120,
        minweight: 1,
        maxweight: 110,
        temperaments: [],
        image: '',
        life_span: 0,
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
        d.preventDefault()
        setInput({
            ...input,
            [d.target.name] : d.target.value
        });
        setError(validate({
            ...input,
            [d.target.name] : d.target.value
        }))
    }

    function handleSelect(d){
        d.preventDefault()
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
            minheight: '',
            maxheight: '',
            minweight: '',
            maxweight: '',
            temperaments: [],
            image: '',
            life_span: '',
        })
        history.push('/home') // te lleva a la ruta indicada
    }

    function handleDelete(temp){
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temper=>temper !== temp)
        })
    }

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
                        {error.name &&(
                            <p className = 'error'>{error.name}</p>
                        )}   
                    </div>
                    <div>
                        <label>Min Height:</label>
                        <input type= 'number'
                                value= {input.minheight}
                                name= 'minheight'
                                onChange = {(d)=>handleChange(d)}/>
                        <label>cms</label>
                        {error.minheight &&(
                            <p className = 'error'>{error.minheight}</p>
                        )}   
                    </div>
                    <div>
                        <label>Max Height:</label>
                        <input type= 'number'
                                value= {input.maxheight}
                                name= 'maxheight'
                                onChange = {(d)=>handleChange(d)}/>
                        <label>cms</label>
                        {error.maxheight &&(
                            <p className = 'error'>{error.maxheight}</p>
                        )} 
                    </div>
                    <div>
                        <label>Min weight:</label>
                        <input type= 'number'
                                value= {input.minweight}
                                name= 'minweight'
                                onChange = {(d)=>handleChange(d)}/>
                        <label>kgs</label>
                        {error.minweight &&(
                            <p className = 'error'>{error.minweight}</p>
                        )} 
                    </div>
                    <div>
                        <label>Max weight:</label>
                        <input type= 'number'
                                value= {input.maxweight}
                                name= 'maxweight'
                                onChange = {(d)=>handleChange(d)}/>
                        <label>kgs</label>
                        {error.maxweight &&(
                            <p className = 'error'>{error.maxweight}</p>
                        )} 
                    </div>
                    <div>
                        <label>Image:</label>
                        <label>
                        <input type= 'text'
                                value= {input.image}
                                name= 'image'
                                onChange = {(d)=>handleChange(d)}/>
                        </label>
                        {error.image &&(
                            <p className = 'error'>{error.image}</p>
                        )} 
                    </div>
                    <div>
                        <label>Life Span:</label>
                        <label>
                        <input type= 'number'
                                value= {input.life_span}
                                name= 'life_span'
                                onChange = {(d)=>handleChange(d)}/>
                        </label>
                        <label>years</label>
                        {error.life_span &&(
                            <p className = 'error'>{error.life_span}</p>
                        )} 
                    </div>
                    <select onChange = {(d)=>handleSelect(d)}>
                      {render(types)}  
                      {error.temperament &&(
                            <p className = 'error'>{error.temperament}</p>
                        )}  
                      </select>  
                      {/* <ul key=''>
                          <li key=''>{input.temperaments?.map(d => d + ', ')}
                          {console.log(input.temperaments)}
                          </li>
                        </ul> */}
                    <button type = 'submit'>Create dog</button>
                    {input.temperaments.map(temp=>
                    <div className = 'divTemp'>
                        <p>{temp}</p>
                        <button onClick = {()=> handleDelete(temp)}>x</button>
                    </div>
                    )}
                </form>
                
        </div>
    )
}
