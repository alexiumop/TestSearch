import React from 'react';
import { Container } from 'react-bootstrap';
import Items from '../components/item';
import CajonDeBusqueda from './cajaBusqueda';

const DetalleItem = props => {
    return (
        <>
            <CajonDeBusqueda {...props} />
            <Container>
                <div className="margin-all"></div>
                <Items {...props} />
            </Container>
        </>
    )
}

export default DetalleItem;