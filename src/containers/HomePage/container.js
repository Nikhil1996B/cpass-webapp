import { connect } from 'react-redux';
import HomePage from './HomePage'
import { videoInfo } from './actions'
import { getcontinueWachingMovieState, getRecommState } from './selectors'

const mapStateToProps = state => {
    return {
        movies: getcontinueWachingMovieState(state),
        continueWaching: getRecommState(state)
    }
}

export default connect(mapStateToProps, { videoInfo })(HomePage)