import { combineReducers } from "redux";

import { DATA_LOADING, DATA_LOADED, UPDATE_DATA } from "../actions/example.action"

const initalState = { records: null, loading: false, error: null };

// Reducer to create initial store for application and to redcue actions to form new state
function reducer(state = initalState, action) {
    console.log(action);
    if (action.type === DATA_LOADING) {
        return { ...state, records: action.payload, loading: true, error: null };
    }
    if (action.type === DATA_LOADED) {
        return { ...state, records: action.payload, loading: false, error: false };
    } else if (action.type === UPDATE_DATA) {
        return state;
    } else {
        return state;
    }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
