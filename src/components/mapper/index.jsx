import React from 'react';
import {ListGroup, Image, Container} from 'react-bootstrap';
import shippingImage from '../../assets/ic_shipping.png';

function List(data) {
    let mapping = data.slice(0, 4).map(items => {
        let shipping = items.shipping.free_shipping === true ? <Image src={shippingImage} rounded /> : null;
        let amount = items.price.toLocaleString(2);
        let currency = items.currency_id === "ARS" ? "$" : "USD$";
        let city = items.address.state_name;
        let conditions = items.condition;
        let itemTitle = items.title;
        let thumbnailUrl = items.thumbnail;
        return(
            <ListGroup.Item>
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

const ResultsItems = props => {
    const listOfItems = props.location.state;
    return(
        <>
            <Container>
                <ListGroup>
                    {List(listOfItems)}
                </ListGroup>
            </Container>
        </>
    )
}

export default ResultsItems;