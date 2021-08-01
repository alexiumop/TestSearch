import React from 'react';
import { Container } from 'react-bootstrap';
import Items from '../components/item';
import CajonDeBusqueda from './cajaBusqueda';

const DetalleItem = props => {
    return (
        <>
            <CajonDeBusqueda {...props} />
            <Container className="margin-all">
                <Items {...props} />
            </Container>
        </>
    )
}

export default DetalleItem;