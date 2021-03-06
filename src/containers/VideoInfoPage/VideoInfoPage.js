import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carosal";
import PropTypes from 'prop-types';
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../UI_Frontendlib/molecules/Slider';
import Search from '../../UI_Frontendlib/molecules/Search';
import HeroBanner from '../../components/HeroBanner'
import Footer from '../../components/Footer/footer'
import './VideoInfoPage.scss';
import ErrorBoundary from './ErrorBoundary'


export const Header = () => {
    const configSearch = {
        placeholder: 'Search',
        display: true
    }
    return (
        <div data-test="headerComponent">
            <Search {...configSearch} />
        </div>
    )
}

const HeaderSahdow = ({ Navshow, handleNavModal }) => {
    return (
        <div className="headerShadow">
            <SideNav ></SideNav>
            <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
            <div className="right-navsection">
                <Header />
                <button className="upgrade">Upgrade</button>
            </div>
            <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
        </div>
    )
}

export const GetCardsCarosal = ({ title = 'Cast', cast = [] }) => {
    return (
        <section aria-label="cast carosal section">
            <p className={"carosal-title"}>{title}</p>
            <ErrorBoundary>
                <Slider>
                    {cast.map(cast => (
                        <Slider.Item movie={cast} key={cast.id}>item1</Slider.Item>
                    ))}
                </Slider>
            </ErrorBoundary>
        </section>
    )
}

export const GetRecommendationCarosal = ({ movies = [], title = "You may also like" }) => {
    return (
        <section aria-label="recommendation carosal section">
            <p className={"carosal-title"}>{title}</p>
            <Slider>
                {movies.map(movie => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
            </Slider>
        </section>
    )
}

export const GetContinueWatching = ({ continueWaching = [], title = "Continue watching" }) => {
    return (
        <section aria-label="recommendation carosal section">
            <p className={"carosal-title"}>{title}</p>
            <Slider>
                {continueWaching.map(continueWaching => (
                    <Slider.Item movie={continueWaching} key={continueWaching.id}>item1</Slider.Item>
                ))}
            </Slider>
        </section>
    )
}

export default function VideoInfoPage(props) {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);

    const { cast, movies, continueWaching } = props

    // TODO - replace the useEffect side effect with the redux flow design when it is to be rendered on page
    useEffect(() => {
        props.videoInfo()
    }, [])

    return (
        <ErrorBoundary>
            <div className="page-background" data-test='VideoInfoPage'>
                <HeaderSahdow Navshow={Navshow} handleNavModal={handleNavModal} />
                <section aria-label="hero banner" className="bannerWrapper">
                    <HeroBanner />
                </section>
                {cast && <GetCardsCarosal cast={cast} data-test='castCarosalComponent' />}
                {continueWaching && <GetContinueWatching continueWaching={continueWaching} data-test='continueWarchingComponent' />}
                {movies && <GetRecommendationCarosal movies={movies} data-test='recommededMoviesComponent' />}
                {/* <Footer /> */}
            </div>
        </ErrorBoundary>
    )
}

VideoInfoPage.propTypes = {
    cast: PropTypes.array,
    continueWaching: PropTypes.array,
    movies: PropTypes.array
}
