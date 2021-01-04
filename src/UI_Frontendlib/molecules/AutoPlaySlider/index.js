import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import image from './images/reactslider.png'

require('./style.scss')

export class AutoPlaySlider extends Component {
    render() {
        const settings = this.props
        const { display } = this.props
        if (!display) {
            return null;
        }
        // var bodyStyles = document.body.style;
        // bodyStyles.setProperty('--background-color', '#00bfff');
        // bodyStyles.setProperty('--background-url', "./images/blackgradient.png");
        return (
            <div className="autopaly-container" data-test="sliderComponent">
                <Slider {...settings}>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </Slider>
            </div>
        )
    }
}

AutoPlaySlider.propTypes = {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    autoplay: PropTypes.bool,
    speed: PropTypes.number,
    autoplaySpeed: PropTypes.number,
    cssEase: PropTypes.string,
    display: PropTypes.bool
}

export default AutoPlaySlider
