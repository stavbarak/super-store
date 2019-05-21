import { DATA_FETCHED, ITEM_FETCHED, CLEAR_DATA_ITEM, SWITCH_TAB } from "../actions/";

const InitialState = {
    data: [],
    loaded: false,
    currentItem: null,
    currentTab: 'description'
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

        case CLEAR_DATA_ITEM:
            return {
                ...state,
                currentItem: null
            }
        case SWITCH_TAB:
            return {
                ...state,
                currentTab: action.payload
            }      
        default:
            return state;
    }
}

export default rootReducer;