
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

        case 'GET_DOGS_BY_NAME':
            return{
                ...state,
                searchDogs: action.payload
            }
        

        default: return state;
    }
}

export default rootReducer;