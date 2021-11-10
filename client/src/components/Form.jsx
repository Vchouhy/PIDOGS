import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postDog, getTemperaments, getAllDogs } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import FormCss from './Form.module.css';



export default function CreateDog(){
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.temperament);
    //const [temps, setTemps] = useState('All')
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        minheight: 9,
        maxheight: 120,
        minweight: 1,
        maxweight: 110,
        temperament: [],
        image: '',
        life_span: 0,
    }) 

    const validate = (input) => {
        let error = {};
        if(input.name.length < 1){
            error.name = '*Name is required'
        }
        if(!input.minheight){
            error.minheight = '*Minimum height is required'
        }
        if(input.minheight <= 8){
            error.minheight = '*Height must be 9 or greater than 9'
        }
        if(!input.maxheight){
            error.maxheight = '*Minimum height is required'
        }
        if(input.maxheight >=121){
            error.maxheight = '*Height must be smaller than 120cm'
        }
        if(!input.minweight){
            error.minweight = '*Minimum weight is required'
        }
        if(!input.maxweight){
            error.maxweight = '*Maximum weight is required'
        }
        if(input.minweight <=0.9){
            error.minweight = '*Minimum weight 1'
        }
        if(input.maxweight >=111){
            error.maxweight = '*Maximum weight is 110'
        }
        if(input.temperament === null){
            error.temperament = '*Temperaments is required'
        }
        if(!input.image){
            error.image = '*Image is required'
        }
        if(input.life_span < 1){
            error.life_span = '*Life span is required'
        }
        return error;
    }

    const handleDisabled = () => {
        if(input.name !== '' && Object.keys(error).length === 0 && input.temperament !== undefined){
            return false
        } return true;
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
        const newTemperament = {
            ...input,
            temperament: input.temperament.concat(d.target.value)
        }
        setInput(newTemperament);
        setError(validate(newTemperament))
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
            temperament: [],
            image: '',
            life_span: '',
        })
        history.push('/home') // te lleva a la ruta indicada
    }

    function handleDelete(e){
        e.preventDefault()
        setInput({
            ...input,
            temperament: input.temperament.filter(temper=>temper !== e.target.id)
        })
    }

    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch])

    return(
        <div className={FormCss.contenedor}>
            <div className = {FormCss.divgral}>
                <h2 className = {FormCss.h2}>Create your own dog!</h2>
                <form
                    className = {FormCss.form}
                    onSubmit = {(d) =>handleSubmit(d)}>
                    <div className = {FormCss.input}>
                        <label>Breed: </label>
                        <input type= 'text'
                               value= {input.name}
                               name= 'name'
                               onChange = {(d)=>handleChange(d)}
                               />  
                        {error.name &&(
                            <p className = 'error'>{error.name}</p>
                        )}   
                    </div>
                    <div className = {FormCss.input}>
                        <label>Min Height: </label>
                        <input type= 'number'
                                value= {input.minheight}
                                name= 'minheight'
                                onChange = {(d)=>handleChange(d)}
                                />
                        <label> cms</label>
                        {error.minheight &&(
                            <p className = 'error'>{error.minheight}</p>
                        )}   
                    </div>
                    <div className = {FormCss.input}>
                        <label>Max Height: </label>
                        <input type= 'number'
                                value= {input.maxheight}
                                name= 'maxheight'
                                onChange = {(d)=>handleChange(d)}
                                />
                        <label> cms</label>
                        {error.maxheight &&(
                            <p className = 'error'>{error.maxheight}</p>
                        )} 
                    </div>
                    <div className = {FormCss.input}>
                        <label>Min weight: </label>
                        <input type= 'number'
                                value= {input.minweight}
                                name= 'minweight'
                                onChange = {(d)=>handleChange(d)}
                                />
                        <label> kgs</label>
                        {error.minweight &&(
                            <p className = 'error'>{error.minweight}</p>
                        )} 
                    </div>
                    <div className = {FormCss.input}>
                        <label>Max weight: </label>
                        <input type= 'number'
                                value= {input.maxweight}
                                name= 'maxweight'
                                onChange = {(d)=>handleChange(d)}
                                />
                        <label> kgs</label>
                        {error.maxweight &&(
                            <p className = 'error'>{error.maxweight}</p>
                        )} 
                    </div>
                    <div className = {FormCss.input}>
                        <label>Image: </label>
                        <label>
                        <input type= 'text'
                                value= {input.image}
                                name= 'image'
                                onChange = {(d)=>handleChange(d)}
                                />
                        </label>
                        {error.image &&(
                            <p className = 'error'>{error.image}</p>
                        )} 
                    </div>
                    <div className = {FormCss.input}>
                        <label>Life Span: </label>
                        <label>
                        <input type= 'number'
                                value= {input.life_span}
                                name= 'life_span'
                                onChange = {(d)=>handleChange(d)}
                                />
                        </label>
                        <label> years</label>
                        {error.life_span &&(
                            <p className = 'error'>{error.life_span}</p>
                        )} 
                    </div>
                    <div className={FormCss.input}>
                        <label>Temperaments: </label>
                    <select className={FormCss.input} onChange = {(d)=>handleSelect(d)} >
                    <option value="All">All</option>    
                      {types?.map((types, index)=>{
                             return(
                                <option  key = {index} value = {types.name}> {types.name} </option>
                                )
                        })}  
                      {error.temperament && (
                            <p className = 'error'>{error.temperament}</p>
                        )}  
                      </select>
                      <br/>
                    </div>  
                   <button className={FormCss.buttonform} disabled = {handleDisabled()}>CREATE!</button>
                    <div>
                    {input.temperament?.map((temp, index)=> 
                    <div key = {index} className = 'divTemp'>
                        <p className={FormCss.input}>{temp}
                        <button className={FormCss.buttondelete} id={temp} onClick = {(e)=> handleDelete(e) }>X</button></p>
                    </div>
                    )}
                    </div>
                </form>
               
            <a href = '/home'> 
                <button className={FormCss.buttonform} onClick={()=>dispatch(getAllDogs())}>Return home</button>
            </a>
            </div>
        </div>
    )
}
