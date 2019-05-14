import { DATA_FETCHED } from "../actions/";

const InitialState = {
    data: [],
    // filteredData: [],
    loaded: false,
    // query: '',
}

const rootReducer = (state = InitialState, action) => {
    switch(action.type) {
        case DATA_FETCHED:
            return {
                ...state, 
                data: action.payload,
                loaded: true
            }
        default:
            return state;
    }
}

export default rootReducer;