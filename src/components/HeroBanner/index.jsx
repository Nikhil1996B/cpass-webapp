import React, { Component } from 'react'
import './style.scss'
import bgImg from './bg-img.png'
import bdImg from './bd.png'
export class HeroBanner extends Component {
    get imageContent() {
        return (
            <div className="desc-img" >
                <img src={bdImg} alt="breaking bad" />
            </div>);
    }

    render() {
        return (
            <>
                <div className="header" />
                <div className="hero-banner" />
                {this.imageContent}
            </>
        )
    }
}

export default HeroBanner
