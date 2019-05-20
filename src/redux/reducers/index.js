import { DATA_FETCHED, ITEM_FETCHED } from "../actions/";

const InitialState = {
    data: [],
    loaded: false,
    currentItem: null
}

const rootReducer = (state = InitialState, action) => {
    switch(action.type) {
        case DATA_FETCHED:
            return {
                ...state,
                data: action.payload,
                loaded: true
            }
        case ITEM_FETCHED:
            return {
                ...state,
                currentItem: action.payload
            }    
        default:
            return state;
    }
}

export default rootReducer;