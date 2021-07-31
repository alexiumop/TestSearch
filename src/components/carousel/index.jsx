import React from 'react';
import {Carousel, Image} from 'react-bootstrap';

function carousel(data) {
    return data.picturesItem.map((sliceImage, index) => {
        console.log(sliceImage)
        return(
            <Carousel.Item key={index}>
                <Image src={sliceImage.secure_url} className="carousel-image"/>
            </Carousel.Item>
        )
    })
}
const itemCarousel = props => {
    return(
        <>
            <Carousel>
                {carousel(props)}
            </Carousel>
        </>
    )
}

export default itemCarousel
