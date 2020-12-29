import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import star from './icons/star.svg';
import { withStyles } from '@material-ui/core/styles';

import './style.scss'

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <star />,
        label: 'Satisfactory',
    },
}

class Ratings extends Component {
    render() {
        const { value, name, precision, readOnly, classname } = this.props.ratings
        return (
            <div className={classname ? classname : 'ratings'}>
                {readOnly ?
                    <Rating name={`${name}`} defaultValue={value} precision={precision} readOnly />
                    :
                    <Rating name={`${name}`} defaultValue={value} precision={precision} />
                }
            </div>
        )
    }
}

export default Ratings
