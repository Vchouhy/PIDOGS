// let name = req.query
// let dogPromiseApi
// let dogPromiseDb
// if(name){ //busca en DB
//     dogPromiseApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}` + name)
//     dogPromiseDb = Dog.findAll({
//         include: Temperament,
//         where: {
//             name: {
//                 [Op.iLike]: '%' + name + '%'
//             }
//         },
//         order: [['name', 'ASC']],
//     })
// } else {
//     dogPromiseApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
//     dogPromiseDb = Dog.findAll({
//         include: Temperament,
//     })
// }
// Promise.all([
// dogPromiseApi,
// dogPromiseDb

// ])
// .then ((resp)=>{
// //console.log(dogPromiseApi)
// const [ dogDB, dogApi] = resp //respuesta API y DB
// // console.log(dogDB)
// // let filteredDogsApi = dogApi.data.map((dog)=>{
// //     return {
// //         id: dog.id,
// //         name: dog.name,
// //         temperament: dog.temperaments.map(temperament => temperament.name).join(", "),
// //         image_url: dog.image_url,
// //         weight: dog.weight.split("-")[0],
// //         life_span: dog.life_span.split(" ")[0]
// //     }
// // })
// // let allDogs = [...filteredDogsApi.data]
// console.log(dogApi)
// res.send(dogApi.data)
// })    
// .catch(error => next(error))