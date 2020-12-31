import React, { useState } from 'react';
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carosal"
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../UI_Frontendlib/molecules/Slider';
import Search from '../../UI_Frontendlib/molecules/Search';
import HeroBanner from '../../components/HeroBanner'
import Footer from '../../components/Footer/footer'
import './VideoInfoPage.scss';
import castMock from './__mock/cast'
import moviesMock from './__mock/movies'
import continueWaching from './__mock/continuewatching'

const movies = moviesMock

const cast = castMock

export const Header = () => {
    return (
        <div>
            <Search />
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
    return (<section aria-label="cast carosal section">
        <p className={"carosal-title"}>{title}</p>
        <Slider>
            {cast.map(cast => (
                <Slider.Item movie={cast} key={cast.id}>item1</Slider.Item>
            ))}
        </Slider>
    </section>)
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

function VideoInfoPage() {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);

    return (
        <div className="page-background">
            <HeaderSahdow Navshow={Navshow} handleNavModal={handleNavModal} />
            <section aria-label="hero banner" className="bannerWrapper">
                <HeroBanner />
            </section>
            <GetCardsCarosal cast={cast} />
            <GetContinueWatching continueWaching={continueWaching} />
            <GetRecommendationCarosal movies={movies} />
            {/* <Footer /> */}
        </div>
    )
}

export { VideoInfoPage }