import React from 'react';
import CajonDeBusqueda from './cajaBusqueda';
import ResultsItems from '../components/mapper';
import BreadcrumbProduct from '../components/breadcrumps';
import { Container } from 'react-bootstrap';

const ResultadosBusqueda = props => {
    return (
        <>
            <CajonDeBusqueda {...props} />
            <Container className="margin-all">
                <BreadcrumbProduct className="margin-all" {...props} />
                <ResultsItems {...props} />
            </Container>
        </>
    )
}

export default ResultadosBusqueda;