const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const router = Router();
const axios = require('axios')
const { YOUR_API_KEY } = process.env
const {Op} = require('sequelize');
const e = require('express');


//traigo los dogs de la API
const getDogsApi = async()=>{
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
  const apiInfo = await apiUrl.data.map(dog=>{
    return{
      id: dog.id,
      name: dog.name,
      minheight: parseInt(dog.height.metric.slice(0,2)),
      maxheight: parseInt(dog.height.metric.slice(4)),
      minweight: parseInt(dog.weight.metric.slice(0,2)),
      maxweight: parseInt(dog.weight.metric.slice(4)),
      life_span: dog.life_span,
      image: "https://cdn2.thedogapi.com/images/" + dog.reference_image_id + ".jpg",
      temperament: dog.temperament,
    }
  })
  return apiInfo;
};

//traigo los dogs de la DB
const getDogsDb = async()=>{
  let dogDb = await Dog.findAll({
    include:{
     model: Temperament,
     attributes: ['name'],
    }
  })
  let newDogDb = []
  for(let i=0; i<dogDb.length;i++){
    newDogDb.push({
      id: dogDb[i].dataValues.id,
      name: dogDb[i].dataValues.name,
      minheight: dogDb[i].dataValues.minheight,
      maxheight: dogDb[i].dataValues.maxheight,
      minweight: dogDb[i].dataValues.minweight,
      maxweight: dogDb[i].dataValues.maxweight,
      life_span: dogDb[i].dataValues.life_span,
      image: dogDb[i].dataValues.image,
      temperament: dogDb[i].dataValues.temperaments.map(e=>e.name),
      createdInDataBase: dogDb[i].dataValues.createdInDataBase
    })
  }
  return newDogDb;
};

//concateno todo
const getAllDogs = async()=>{
  const apiInfo = await getDogsApi();
  const dbInfo = await getDogsDb();
  //console.log(dbInfo)
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};



module.exports = { getDogsApi, getDogsDb, getAllDogs };