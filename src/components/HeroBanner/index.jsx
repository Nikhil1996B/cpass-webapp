import React, { Component } from 'react'
import './style.scss'
import bgImg from './images/bg-img.png'
import bdImg from './images/bd.png'
import Ratings from './../../UI_Frontendlib/ratings/ratings'

export class HeroBanner extends Component {

    get ratingsSection() {
        const ratings = {
            value: 4.5,
            name: "half-rating-read",
            precision: 0.5,
            readOnly: true,
            classname: null
        };
        return (
            <div className="ratingsSection">
                {<h2>{`Breaking Bad: S3 E6`}</h2>}
                {<p className="ratings-wrapper">
                    <span className="ratings-value">
                        {ratings.value}
                    </span>
                    <Ratings ratings={ratings} />
                </p>}
            </div>
        )
    }

    get imageContent() {
        return (
            <>
                <div className="desc-img" >
                    <img src={bdImg} alt="breaking bad" />
                </div>
                {this.ratingsSection}
            </>)
    }


    render() {
        return (
            <>
                <div className="header" />
                <div className="hero-bg">
                    <div className="scrim" />
                    <div className="hero-banner" >
                        {this.imageContent}
                    </div>
                </div>
            </>
        )
    }
}

export default HeroBanner
