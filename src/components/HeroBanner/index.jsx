import React, { Component } from 'react'
import bgImg from './images/bg-img.png'
import bdImg from './images/bd.png'
import Ratings from '../../UI_Frontendlib/atoms/ratings/ratings'
import RatingsButton from '../../UI_Frontendlib/atoms/RatingsButton'
import like from './images/like.png'

require('./style.scss')

/**
 * Hero Banner React component
 */
export class HeroBanner extends Component {

    // method to create movie genres
    get genereType() {
        return (
            <div className="sub-type" >
                <div className="form-check list-inline list-group-horizontal btn-group" role="group" data-toggle="buttons">
                    <label class="btn genres">
                        <input type="checkbox" className="form-check list-group-item" />Action
                </label>
                    <label className="btn genres">
                        <input type="checkbox" class="form-check list-group-item" />Crime
                </label>
                    <label className="btn genres">
                        <input type="checkbox" class="form-check list-group-item" />Drama
                 </label>
                    <label className="btn genres">
                        <input type="checkbox" class="form-check list-group-item" />Fantasy
                </label>
                </div></div>
        )
    }

    get actionPanel() {
        return (
            <div className="action-panel">
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
                            src={like}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            share
                        </span>
                    </a>
                    <a href="/videoinfo" className="icon-link">
                        <img
                            src={like}
                            alt="devices-logo"
                            className="like-logo"
                        ></img>
                        <br />
                        <span>
                            Download
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

        return (
            <div className="ratingsSection">
                {<h2>{`Breaking Bad: S3 E6`}</h2>}
                {<p className="sub-type cotnent">Series</p>}
                {<p className="ratings-wrapper">
                    <span className="ratings-value">
                        {ratings.value}
                    </span>
                    <Ratings ratings={ratings} />
                    <RatingsButton value={ratings.value} />
                </p>}
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
                <div className="header" />
                <div className="blackLayer" />
                <div className="hero-banner" >
                    {this.imageContent}
                </div>
            </>
        )
    }
}

export default HeroBanner
