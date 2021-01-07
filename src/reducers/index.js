import { combineReducers } from "redux";

import { DATA_LOADING, DATA_LOADED, UPDATE_DATA } from "../actions/example.action"

// import component reducers
// import { videoInfo, movieInfo, continueWatchingMovieInfo } from '../../src/containers/VideoInfoPage/reducers/reducer'


export const createReducer = asyncReducers => {
    return combineReducers({
        ...asyncReducers
    });
};

// const rootReducer = combineReducers({ cast: videoInfo, movie: movieInfo, continueWatching: continueWatchingMovieInfo });

