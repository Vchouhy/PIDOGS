import axios from 'axios';

export function getAllDogs(){
    return async function(dispatch){
        var json = await axios('http://localhost:3001/api/dogs'); //conexion btween front and back
    
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload: json.data
        })

    }
}

export function getDogsByName(name){
            return function(dispatch) {
                axios.get('http://localhost:3001/api/dogs?name=' + name)
                .then((dogs) => {
                    dispatch({
                        type: 'GET_DOGS_BY_NAME',
                        payload: dogs.data
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }




// export function filterDogsByTemperament(payload){
//     return{
//         type: 'FILTER_BY_TEMPERAMENT',
//         payload
//     }
//}
