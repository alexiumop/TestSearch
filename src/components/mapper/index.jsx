import React from 'react';
import {ListGroup, Image, Container} from 'react-bootstrap';
import shippingImage from '../../assets/ic_shipping.png';
import httpClient from '../../server/httpClient';

function List(data) {
    const listOfItems = data.location.state;
    let mapping = listOfItems.slice(0, 4).map((items, index) => {
        let shipping = items.shipping.free_shipping === true ? <Image src={shippingImage} rounded /> : null;
        let amount = items.price.toLocaleString(2);
        let currency = items.currency_id === "ARS" ? "$" : "USD$";
        let city = items.address.state_name;
        let conditions = items.condition;
        let itemTitle = items.title;
        let thumbnailUrl = items.thumbnail;
        return(
            <ListGroup.Item className="list-pointer" key={index} onClick={event => clickOnProduct(event, items.id, data)}>
                <div className="col-md-12 flexing-box">
                    <div className="col-md-3">
                        <Image className="thumbnail-fit" src={thumbnailUrl} thumbnail />
                    </div>
                    <div className="col-md-7">
                        <div className="price-list">{currency } {amount } {shipping }</div>
                        <label className="title-list">{itemTitle}</label>
                        <br />
                        <label className="title-list">{conditions}</label>
                    </div>
                    <div className="col-md-2">
                        <label className="city-list">{city}</label>
                    </div>
                </div>
            </ListGroup.Item>
        )
    });
    return mapping;
}

function clickOnProduct(event, itemById, data) {
    event.preventDefault();
    httpClient.getSimpleProductById(itemById)
    .then(itemResult => {
        data.history.push('/items', JSON.stringify(itemResult))
    })
}

const ResultsItems = props => {
    return(
        <>
            <Container>
                <ListGroup>
                    {List(props)}
                </ListGroup>
            </Container>
        </>
    )
}

export default ResultsItems;