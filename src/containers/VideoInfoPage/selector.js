import { createSelector } from 'reselect';
import keys from 'ramda/src/keys'
import compose from 'ramda/src/compose'

export const getInfoState = state => {
    return state.videoInfo.cast
}

export const getMovieState = state => {
    return state.videoInfo.movie
}

export const getRecommState = state => {
    return state.videoInfo.recommendation
}
