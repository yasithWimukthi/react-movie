import React from 'react';
import {Image} from './Thumb.styls';

const Thumb = ({image,movieId,clickable}) => {
    return (
        <div>
            <Image src={image} alt="image-thumb" />
        </div>
    )
}

export default Thumb;
