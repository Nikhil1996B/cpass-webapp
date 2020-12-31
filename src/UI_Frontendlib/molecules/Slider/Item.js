import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import Progress from '../../atoms/linerprogress'
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
          onClick={() => onSelectSlide(movie)}
        >
          <img src={movie.image} alt="" />
          {movie.progress && <div>
            <Progress value={movie.progress} />
          </div>}
          {(movie.title && <p className="title">{movie.title}</p>)}
          <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
