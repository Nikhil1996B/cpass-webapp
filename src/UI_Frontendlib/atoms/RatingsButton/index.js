import React, { Component } from 'react'
import imdb from './../../icons/imbd.png'
require('./style.scss')

class RatingsButton extends Component {
    render() {
        const { value = 7.5 } = this.props
        return (
            <div >
                <button type="submit" id="image-button" className={"button-container"}>
                    <span>{value}/10</span>
                    <img src={imdb} alt="Save icon" />
                </button>
            </div>
        )
    }
}

export default RatingsButton
