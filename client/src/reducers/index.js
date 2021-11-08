import { GET_ALL_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS, POST_DOG, GET_DETAILS, FILTER_CREATED, ORDER_ASC_DES, ORDER_BY_WEIGHT, FILTER_BY_TEMPERAMENTS } from '../actions/index'

const initialState = { //declare initial state w/dogs
    dogs : [],
    temperament : [],
    searchDogs : [],
    detail: [],
    alldogs: []
}

function rootReducer (state = initialState, action) {

    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs: action.payload, //bring me ev that comes w/ get all dogs fx
                searchDogs: action.payload
            }

        case GET_DOGS_BY_NAME:
            return{
                ...state,
                searchDogs: action.payload
            }
        
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            }

        case POST_DOG:
            return{
                ...state
            }

        case GET_DETAILS:
            return{
                ...state,
                detail: action.payload
            }

        case FILTER_CREATED:
            const allDogsCreated = state.dogs
            const createdFilter = action.payload === 'existent' ? allDogsCreated.filter((e) => e.createdInDataBase) : allDogsCreated.filter((e) => !e.createdInDataBase)
            return{
                ...state,
                dogs: action.payload === 'allbreeds' ? allDogsCreated : createdFilter
            }

        case ORDER_ASC_DES:

            let sortArray = action.payload === 'ascendent'?
            state.dogs.sort(function(a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            }):
            state.dogs.sort(function(a, b){
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;

            })
            return {
                ...state,
                dogs: sortArray
            }

            case ORDER_BY_WEIGHT:
                let sortedArrWeight = action.payload === 'weightasc' ?
                state.dogs.sort((a, b) => {
                    return b.minweight - a.minweight
                }) :
                state.dogs.sort((a, b) => {
                    return a.minweight - b.minweight
                })
                return{
                    ...state,
                    dogs: sortedArrWeight
                }
        
            case FILTER_BY_TEMPERAMENTS:
                const allDogs = state.temperament
                const temperamentFiltered = allDogs.filter((dog)=>
                dog.temperament?.includes(action.payload))
                return {
                    ...state,
                    dogs: temperamentFiltered
                }
        default: return state;
    }
}

export default rootReducer;