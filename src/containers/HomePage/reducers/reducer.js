import { types } from '../actions/types'


export function continueWachingInfo(state = [], action) {
    switch (action.type) {
        case types.GET_CONTINUEWATCHING:
            return action.payload
        default:
            return state;
    }
}

export function popularMovieInfo(state = [], action) {
    switch (action.type) {
        case types.GET_RECOMMENDEDMOVIES:
            return action.payload
        default:
            return state;
    }
}