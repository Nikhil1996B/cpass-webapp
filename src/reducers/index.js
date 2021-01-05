import { combineReducers } from "redux";

import { DATA_LOADING, DATA_LOADED, UPDATE_DATA } from "../actions/example.action"

// import component reducers
import { videoInfo, movieInfo, continueWatchingMovieInfo } from '../../src/containers/VideoInfoPage/reducers/reducer'
import { continueWachingInfo, popularMovieInfo } from '../../src/containers/HomePage/reducers/reducer'

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

const rootReducer = combineReducers({ reducer, cast: videoInfo, movie: movieInfo, continueWatching: continueWatchingMovieInfo });

export default rootReducer;
