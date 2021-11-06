import { GET_ALL_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS, POST_DOG} from '../actions/index'

const initialState = { //declare initial state w/dogs
    dogs : [],
    temperaments : [],
    searchDogs : []

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
                temperaments: action.payload
            }

        case POST_DOG:
            return{
                ...state
            }
        default: return state;
    }
}

export default rootReducer;