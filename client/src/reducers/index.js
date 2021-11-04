
const initialState = { //declare initial state w/dogs
    dogs : [],
    allDogs : []
}

function rootReducer (state = initialState, action) {

    switch(action.type){
        case 'GET_ALL_DOGS':
            return{
                ...state,
                dogs: action.payload //bring me ev that comes w/ get all dogs fx
            }
        // case 'FILTER_BY_TEMPERAMENT':
        //     const allDogs = state.temperament
        //     const temperametFilter = action.payload === 'Temperament' ? allDogs : allDogs.filter(dog => dog.temperament === action.payload)
        //     return{
        //         ...state,

        //     }
        case 'FILTER_CREATED_BY_ME':
            const allAllDogs = state.allDogs
            const filterCreatedByMe = action.payload === 'created' ? allAllDogs.filter(dog => dog.createdInDataBase) : allAllDogs.filter(dog => !dog.createdInDataBase)
            return{
                ...state,
                dogs: action.payload === 'all breeds' ? state.allAllDogs : filterCreatedByMe
            }
        default: return state;
    }
}

export default rootReducer;