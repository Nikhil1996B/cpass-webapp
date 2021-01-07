import React, { Component } from 'react'
import bgImg from './images/bg-img.png'
import bdImg from './images/bd.png'
import Ratings from '../../UI_Frontendlib/atoms/ratings/ratings'
import RatingsButton from '../../UI_Frontendlib/atoms/RatingsButton'
import like from './images/like.png'
import playBtn from "./images/playBtn.png"
import share from "./images/Share.svg"
import download from "./images/Download.svg"
require('./style.scss')

/**
 * Hero Banner React component
 */
export class HeroBanner extends Component {

    // method to create movie genres
    get genereType() {
        return (
            <div className="sub-type" data-test='genereComponent'>
                <div className="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                    <span className="btn genres">
                        <span type="checkbox" className="form-check list-group-item" />
                        <span>
                            Action
                        </span>
                    </span>
                    <span className="btn genres">
                        <span type="checkbox" className="form-check list-group-item" />
                        <span>
                            Crime
                        </span>
                    </span>
                    <span className="btn genres">
                        <span type="checkbox" className="form-check list-group-item" />
                        <span>
                            Drama
                        </span>
                    </span>
                    <span className="btn genres">
                        <span type="checkbox" className="form-check list-group-item" />
                        <span>
                            Fantasy
                        </span>
                    </span>
                </div></div>
        )
    }

    get actionPanel() {
        return (
            <div className="action-panel" data-test='actionComponent'>
                <div className="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                    <a href="/videoinfo" className="icon-link">
                        <img
                            src={like}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            Like
                        </span>
                    </a>

                    <a href="/videoinfo" className="icon-link">
                        <img
                            src={share}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            share
                        </span>
                    </a>
                    <a href="/player" className="icon-link">
                        <img
                            src={playBtn}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            Play
                        </span>
                    </a>
                    <a href="/videoinfo" className="icon-link">
                        <img
                            src={download}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            watch later
                        </span>
                    </a>
                </div>
            </div >
        )
    }

    // Method to display ratings 
    get ratingsSection() {

        const ratings = {
            value: 4.5,
            name: "half-rating-read",
            precision: 0.5,
            readOnly: true,
            classname: null
        };

        const fetch = () => {
            // Initiate fetch action
            console.log('callback for fetch')
        }

        const configButton = {
            buttonText: ratings.value,
            emitEvent: fetch
        }

        return (
            <div className="ratingsSection" data-test='ratingsComponent'>
                {<h2>{`Breaking Bad: S3 E6`}</h2>}
                {<p className="sub-type cotnent">Series</p>}
                {<div className="ratings-wrapper">
                    <span className="ratings-value">
                        {ratings.value}
                    </span>
                    <Ratings {...ratings} />
                    <RatingsButton  {...configButton} />
                </div>}
                {<p className="sub-type cotnent">{`43 Minutes - USA`}</p>}
                {this.genereType}
                {<p className="sub-type cotnent">{`A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`}</p>}
                {this.actionPanel}
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
                <div className="blackLayer" />
                <div className="hero-banner" >
                    {this.imageContent}
                </div>
            </>
        )
    }
}

export default HeroBanner
