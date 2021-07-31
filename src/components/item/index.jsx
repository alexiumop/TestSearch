import React, {useEffect, useState} from 'react';
import httpClient from '../../server/httpClient';
import {Image, Card, Button} from 'react-bootstrap'; 
import ItemCarousel from '../carousel';
import ImageShipping from '../../assets/ic_shipping.png';

function pricingSquare(pricing) {
    const {title, condition, price, sold_quantity, currency_id} = pricing.data;
    let symbol = currency_id === "ARS" ? "$" : "USD$";
    let freeShipping = pricing.data.shipping.free_shipping === true ? <Image src={ImageShipping} rounded /> : null;
    return(
        <div className="col-md-4">
            <Card>
                <Card.Body>
                    <Card.Text className="conditions-product-card">{condition } - {sold_quantity } vendidos {freeShipping}</Card.Text>
                    <Card.Title className="title-product-card">{title}</Card.Title>
                    <Card.Text className="price-product-card">{symbol + price.toLocaleString(2)}</Card.Text>
                    <Card.Text><Button className="button-product-card" variant="primary">Comprar</Button></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
function descAndImageSquar(imagesUrls, desc) {
    let images = imagesUrls.data.pictures;
    return(
        <div className="col-md-8">
            <ItemCarousel picturesItem={images} />
            <span className="title-description">Descripción del Producto</span>
            <p className="text-description">{desc}</p>
        </div>
    )
}
const Items = props => {
    const [itemResult] = useState(JSON.parse(props.location.state));
    const [descText, setDescText] = useState('');
    useEffect(() => {
        let id = itemResult.data.id 
        httpClient.getSimpleProductByIdDesc(id)
        .then(description => {
            setDescText(description.data.plain_text);
        })
    }, [])
    return(
        <>
            <div style={{display: "flex"}}>
                {descAndImageSquar(itemResult, descText)}
                {pricingSquare(itemResult)}
            </div>
        </>
    )
}

export default Items;