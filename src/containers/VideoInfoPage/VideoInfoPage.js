import React, { useState } from 'react';
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carosal"
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../components/Slider';
import HeroBanner from '../../components/HeroBanner'
import './VideoInfoPage.scss';
import img2 from './assets/img2.png'
import slider3 from './assets/slider3.png'
import slider4 from './assets/slider4.png'
import movieImg from './assets/images@2x.png'
import cast1 from './assets/cast1.png'

const movies = [
    {
        id: 1,
        image: movieImg,
        imageBg: '/images/slide1b.webp',
        title: 'Money Heist',
    },
    {
        id: 2,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Avengers- Infinity war'
    },
    {
        id: 3,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'Ford v/s ferrari',
    },
    {
        id: 4,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'Batman - Dark Knight rises'
    },
    {
        id: 5,
        image: movieImg,
        imageBg: '/images/slide1b.webp',
        title: 'Money Heist',
    },
    {
        id: 6,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Avengers- Infinity war'
    },
    {
        id: 7,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'Ford v/s ferrari',
    },
    {
        id: 8,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'Batman - Dark Knight rises'
    },
    {
        id: 9,
        image: movieImg,
        imageBg: '/images/slide1b.webp',
        title: 'Money Heist',
    },
    {
        id: 10,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Avengers- Infinity war'
    },
    {
        id: 11,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'Ford v/s ferrari',
    },
    {
        id: 12,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'Batman - Dark Knight rises'
    },
];

const cast = [
    {
        id: 1,
        image: cast1,
        imageBg: '/images/slide1b.webp',
        content: 'Bryan Lee Cranston (born March 7, 1956) is an American actor, director, producer, and screenwriter. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).',
        title: 'Bryan Cranston',
    },
    {
        id: 2,
        image: cast1,
        imageBg: '/images/slide1b.webp',
        content: 'Bryan Lee Cranston (born March 7, 1956) is an American actor, director, producer, and screenwriter. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).',
        title: 'Bryan Cranston',
    },
    {
        id: 3,
        image: cast1,
        imageBg: '/images/slide1b.webp',
        content: 'Bryan Lee Cranston (born March 7, 1956) is an American actor, director, producer, and screenwriter. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).',
        title: 'Bryan Cranston',
    },
    {
        id: 4,
        image: cast1,
        imageBg: '/images/slide1b.webp',
        content: 'Bryan Lee Cranston (born March 7, 1956) is an American actor, director, producer, and screenwriter. He is best known for his roles as Walter White in the AMC crime drama series Breaking Bad (2008–2013), Tim Whatley in the NBC sitcom Seinfeld (1994–1997), Hal in the Fox sitcom Malcolm in the Middle (2000– 2006), and Vince Lonigan in the Prime Video crime drama series Sneaky Pete (2015–2019).',
        title: 'Bryan Cranston',
    }
];



function VideoInfoPage() {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    return (
        <div className="page-background">
            <div className="headerShadow">
                <SideNav ></SideNav>
                <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
                <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
            </div>
            <section aria-label="hero banner">
                <HeroBanner />
            </section>
            <section aria-label="cast carosal section">
                <p className={"carosal-title"}>Cast</p>
                <Slider>
                    {cast.map(cast => (
                        <Slider.Item movie={cast} key={cast.id}>item1</Slider.Item>
                    ))}
                </Slider>
            </section>
            <section aria-label="recommendation carosal section">
                <p className={"carosal-title"}>You may also like</p>
                <Slider>
                    {movies.map(movie => (
                        <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                    ))}
                </Slider>
            </section>
        </div>
    )
}

export { VideoInfoPage }