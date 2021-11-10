const { Router } = require('express');
const {Temperament} = require('../db')
const router = Router();
const axios = require('axios')
const { YOUR_API_KEY } = process.env


router.get('/', async(req, res, next)=>{
    try{
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);

    const temperament = temperamentApi.data.map(dog => dog.temperament)
        .join(', ')
        .split(', ');

        temperament.forEach((dog)=>{ 
            Temperament.findOrCreate({
            where: { name: dog }
            })
    });
    const allTemperament = await Temperament.findAll();
    res.status(200).send(allTemperament)
    }
    catch(error){
        next(error)
    }
})



module.exports = router;