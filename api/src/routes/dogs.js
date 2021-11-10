const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const { getAllDogs } = require('../routes/controllers');
const axios = require('axios')

router.get('/', async(req, res, next)=>{
    try{
    const {name} = req.query;
    const allDogs = await getAllDogs();
    if(name){
        let dogName = await allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase())); //pregunto si incluye el nombre que me mandan por query
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send('Dog not found')
    }
    else{
        res.status(200).send(allDogs)
    }}
    catch(error){
        next(error)
    }
})

router.post('/', async(req, res, next)=>{
    let { name, minheight, maxheight ,maxweight , minweight, life_span, image, temperament, createdInDataBase } = req.body;
    try{
        let newDog = await Dog.create({
        name,
        minheight,
        maxheight,
        maxweight,
        minweight,
        life_span,
        image, 
        createdInDataBase,
        temperament,   
        })
    //console.log(temperament)
   let temperamentDb = await Temperament.findAll({
        where: {name: temperament}
    })
   
    newDog.addTemperament(temperamentDb)
    //console.log(temperamentDb)
    res.send(newDog)}
    
    catch(error){
        next(error)
    }
})

router.get('/:id', async (req,res)=>{
      try{  
        const {id} = req.params
        const everyDog = await getAllDogs()
        if(id){
            let dogId = await everyDog.filter(
                dog => id.length > 8 ? dog.id === id : 
                (dog.id) === parseInt(id))
            dogId.length?
            res.status(200).json(dogId):
            res.status(404).send('Dog not found')
        }
        }
        catch(error){
            next(error)
        }
})



module.exports = router;