import React from 'react';
import CajonDeBusqueda from './cajaBusqueda';
import ResultsItems from '../components/mapper';

const ResultadosBusqueda = props => {
    return (
        <>
            <CajonDeBusqueda {...props} />
            <ResultsItems {...props} />
        </>
    )
}

export default ResultadosBusqueda;