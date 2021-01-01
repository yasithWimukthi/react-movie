import React from 'react';
import {Link} from 'react-router-dom';
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

export default Thumb;
