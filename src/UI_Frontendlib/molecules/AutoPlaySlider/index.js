import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from './images/reactslider.png'

require('./style.scss')

export class AutoPlaySlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="autopaly-container">
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

export default AutoPlaySlider
