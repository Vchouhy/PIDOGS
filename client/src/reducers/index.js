
const initialState = { //declare initial state w/dogs
    dogs : [],
    allDogs : [],
    searchDogs : []
}

function rootReducer (state = initialState, action) {

    switch(action.type){
        case 'GET_ALL_DOGS':
            return{
                ...state,
                dogs: action.payload, //bring me ev that comes w/ get all dogs fx
                searchDogs: action.payload
            }
        // case 'FILTER_BY_TEMPERAMENT':
        //     const allDogs = state.temperament
        //     const temperametFilter = action.payload === 'Temperament' ? allDogs : allDogs.filter(dog => dog.temperament === action.payload)
        //     return{
        //         ...state,

        //     }
        case 'GET_DOGS_BY_NAME':
            return{
                ...state,
                searchDogs: action.payload
            }

        default: return state;
    }
}

export default rootReducer;