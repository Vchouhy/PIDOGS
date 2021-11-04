const { Router } = require('express');
const {Temperament} = require('../db')
const router = Router();
const axios = require('axios')



router.get('/', async(req, res, next)=>{
    try{
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key={YOUR_API_KEY}`);
    const temperaments = temperamentApi.data.map(dog => dog.temperament).join(', ').split(', ');
        temperaments.forEach((dog)=>{ 
            Temperament.findOrCreate({
            where: { name: dog }
            })
    });
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments)
    }
    catch(error){
        next(error)
    }
})

// router.post('/', async(req, res, next)=>{ //el next va al control de errores
//     const { name } = req.body;
//     const newTemperament = await Temperament.create({
//         name
//     })
//     res.send(newTemperament)
// })

module.exports = router;