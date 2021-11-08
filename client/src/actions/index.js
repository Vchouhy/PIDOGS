import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const POST_DOG = 'POST_DOG'
export const GET_DETAILS = 'GET_DETAILS'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_ASC_DES = 'ORDER_ASC_DES'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS'

export function getAllDogs(){
    return async function(dispatch){
        var json = await axios('http://localhost:3001/api/dogs'); //conexion btween front and back
    
        return dispatch({
            type: GET_ALL_DOGS,
            payload: json.data
        })

    }
};

export function getDogsByName(name){
            return function(dispatch) {
                axios.get('http://localhost:3001/api/dogs?name=' + name)
                .then((dogs) => {
                    dispatch({
                        type: GET_DOGS_BY_NAME,
                        payload: dogs.data
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        };

export function postDog(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/api/dogs', payload);
        return response
    }
};

export function getTemperaments(){
    return async function(dispatch){ 
        var temp = await axios('http://localhost:3001/api/temperament', {})
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: temp.data,

        })
    }
    
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/api/dogs/' + id)
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        }
        catch(error){
            console.log(error)
        }
    } 

}
export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function orderAscDes(payload){
    return{
        type: ORDER_ASC_DES,
        payload
    }
}

export function orderByWeight(payload){
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}
export function filterDogsByTemperaments(payload){
    return{
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}
