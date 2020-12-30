import React, { useState } from 'react';
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carosal"
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../UI_Frontendlib/molecules/Slider';
import HeroBanner from '../../components/HeroBanner'
import './VideoInfoPage.scss';
import castMock from './__mock/cast'
import moviesMock from './__mock/movies'

const movies = moviesMock

const cast = castMock

const HeaderSahdow = ({ Navshow, handleNavModal }) => {
    return (
        <div className="headerShadow">
            <SideNav ></SideNav>
            <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
            <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
        </div>
    )
}

const GetCardsCarosal = ({ title = 'Cast', cast = [] }) => {
    return (<section aria-label="cast carosal section">
        <p className={"carosal-title"}>{title}</p>
        <Slider>
            {cast.map(cast => (
                <Slider.Item movie={cast} key={cast.id}>item1</Slider.Item>
            ))}
        </Slider>
    </section>)
}

const GetRecommendationCarosal = ({ movies = [], title = "You may also like" }) => {
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
            <GetRecommendationCarosal movies={movies} />
        </div>
    )
}

export { VideoInfoPage }