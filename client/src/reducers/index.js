import { GET_ALL_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS, POST_DOG, GET_DETAILS} from '../actions/index'

const initialState = { //declare initial state w/dogs
    dogs : [],
    temperament : [],
    searchDogs : [],
    detail: []

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
        default: return state;
    }
}

export default rootReducer;