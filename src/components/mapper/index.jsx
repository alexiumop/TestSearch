import React from 'react';
import {ListGroup, Image, Container} from 'react-bootstrap';

function List(data) {
    let mapping = data.slice(0, 4).map(items => {
        return(
            <ListGroup.Item>
                <Image className="thumbnail-fit" src={items.thumbnail} thumbnail />
            </ListGroup.Item>
        )
    });
    return mapping;
}

const ResultsItems = props => {
    console.log('todos los resultados:',props);
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