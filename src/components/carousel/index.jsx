import React from 'react';
import {Carousel, Image} from 'react-bootstrap';

function carousel(data) {
    return data.picturesItem.map((sliceImage, index) => {
        return(
            <Carousel.Item key={index}>
                <Image src={sliceImage.secure_url} className="carousel-image" alt="carousel"/>
            </Carousel.Item>
        )
    })
}
const itemCarousel = props => {
    return(
        <>
            <Carousel interval={1000}>
                {carousel(props)}
            </Carousel>
        </>
    )
}

export default itemCarousel
