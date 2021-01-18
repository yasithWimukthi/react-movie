import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Image} from './Thumb.styls';

const Thumb = ({image,movieId,clickable}) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="image-thumb" />
                </Link>
            ) : (
                <Image src={image} alt="image-thumb" />
            )}           
        </div>
    )
}

Thumb.propTypes ={
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;
