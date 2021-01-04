import { types } from '../actions/types'

export default function videoInfo(state = [], action) {
    switch (action.type) {
        case types.GET_CAST:
            return action.payload
        default:
            return state;
    }
}

export function movieInfo(state = [], action) {
    switch (action.type) {
        case types.GET_MOVIES:
            return action.payload
        default:
            return state;
    }
}

export function continueWatchingMovieInfo(state = [], action) {
    switch (action.type) {
        case types.GET_RECOMMENDATION:
            return action.payload
        default:
            return state;
    }
}