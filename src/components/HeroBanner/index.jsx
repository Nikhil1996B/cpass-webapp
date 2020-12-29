import React, { Component } from 'react'
import './style.scss'
import bgImg from './bg-img.png'
import bdImg from './bd.png'
export class HeroBanner extends Component {
    render() {
        return (
            <>
                <div className="header">
                </div>
                <div className="hero-banner">

                </div>
                <div className="desc-img" >
                    <img src={bdImg} alt="breaking bad" />
                </div>
            </>
        )
    }
}

export default HeroBanner
