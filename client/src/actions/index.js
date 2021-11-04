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

export function filterCreatedByMe(payload){
    return{
        type: 'FILTER_CREATED_BY_ME',
        payload
    }
}

// export function filterDogsByTemperament(payload){
//     return{
//         type: 'FILTER_BY_TEMPERAMENT',
//         payload
//     }
//}
