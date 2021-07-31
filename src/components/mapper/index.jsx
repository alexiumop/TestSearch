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
            <ListGroup.Item key={index} onClick={event => clickOnProduct(event, items.id, data)}>
                <Image className="thumbnail-fit" src={thumbnailUrl} thumbnail />
                <div>{currency}{amount}</div>
                <label>{itemTitle}</label>
                <label>{conditions}</label>
                {shipping}
                <label>{city}</label>
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