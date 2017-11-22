/**
 * Created by yarivkatz on 22/11/2017.
 */

const initialState = {
    tasks: []
}

function reducer(state = initialState, action) {
    switch(action.type){
        case 'SET_TASKS':
            return {
                tasks: action.payload
            }
        default:
            return state;
    }
}