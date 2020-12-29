import React, { useState } from 'react';
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carosal"
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../components/Slider';
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
        title: '1983',
    },
    {
        id: 2,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Russian doll'
    },
    {
        id: 3,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'The rain',
    },
    {
        id: 4,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'education'
    },
    {
        id: 5,
        image: movieImg,
        imageBg: '/images/slide1b.webp',
        title: '1983'
    },
    {
        id: 6,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Russian doll'
    },
    {
        id: 7,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'The rain',
    },
    {
        id: 8,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'education'
    },
    {
        id: 9,
        image: movieImg,
        imageBg: '/images/slide6b.webp',
        title: 'Black mirror'
    }, {
        id: 10,
        image: movieImg,
        imageBg: '/images/slide1b.webp',
        title: '1983'
    },
    {
        id: 11,
        image: img2,
        imageBg: '/images/slide2b.webp',
        title: 'Russian doll'
    },
    {
        id: 12,
        image: slider3,
        imageBg: '/images/slide3b.webp',
        title: 'The rain',
    },
    {
        id: 13,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'education'
    },
];

const cast = [
    {
        id: 1,
        image: cast1,
        imageBg: '/images/slide1b.webp',
        title: '1983',
    },
    {
        id: 2,
        image: cast1,
        imageBg: '/images/slide2b.webp',
        title: 'Russian doll'
    },
    {
        id: 3,
        image: cast1,
        imageBg: '/images/slide3b.webp',
        title: 'The rain',
    },
    {
        id: 4,
        image: slider4,
        imageBg: '/images/slide4b.webp',
        title: 'education'
    }
];



function VideoInfoPage() {
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    return (
        <div className="page-background">
            <div>
                <SideNav ></SideNav>
                <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
                <FullSideNav show={Navshow} handleModal={handleNavModal}></FullSideNav>
            </div>
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