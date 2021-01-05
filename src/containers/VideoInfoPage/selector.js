// import { createSelector } from 'reselect';


export const getInfoState = state => {
    return state.videoInfo.cast
}

export const getMovieState = state => {
    return state.videoInfo.movie
}

export const getRecommState = state => {
    return state.videoInfo.recommendation
}
