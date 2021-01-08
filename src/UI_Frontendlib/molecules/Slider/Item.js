import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import Progress from '../../atoms/linerprogress'
import { Redirect } from 'react-router-dom';
require('./Item.scss')

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      return (
        <div
          ref={elementRef}
          className={`${cx('item', {
            'item--open': isActive,
          })} `}
          onClick={() => {
            if (movie.showDetails) onSelectSlide(movie);
            if (movie.movieInfo) return window.location.pathname = '/videoInfo';
          }
          }
        >
          <div className="hoverDiv" />
          <div className="info">
            <video
              poster={""}
              onMouseOver={(e) => e.target.play()}
              loop
              muted
              onMouseOut={(e) => e.target.pause()}
              style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                transform: "translate(-50%, -50%)",
                zIndex: "1"
              }}
            >
              <source src={"https://giant.gfycat.com/VerifiableTerrificHind.mp4"} type="video/mp4" />
            </video>
          </div>

          <img src={movie.image} alt="" />
          {movie.progress && <div>
            <Progress value={movie.progress} />
          </div>}
          {(movie.title && <p className="title">{movie.title}</p>)}
          {movie.showDetails && <ShowDetailsButton onClick={() => onSelectSlide(movie)} />}
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer >
);

export default Item;
