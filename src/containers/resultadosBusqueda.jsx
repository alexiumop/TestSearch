import React from 'react';
import CajonDeBusqueda from './cajaBusqueda';
import ResultsItems from '../components/mapper';

const ResultadosBusqueda = props => {
    return (
        <>
            <CajonDeBusqueda {...props} />
            <div className="margin-all"></div>
            <ResultsItems {...props} />
        </>
    )
}

export default ResultadosBusqueda;