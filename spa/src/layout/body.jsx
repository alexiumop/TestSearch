import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//vistas
import CajonDeBusqueda from '../containers/cajaBusqueda';
import DetalleItem from '../containers/detalle';
import ResultadosBusqueda from '../containers/resultadosBusqueda';

const Body = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={CajonDeBusqueda} />
                    <Route path="/resultados-busquedas/" component={ResultadosBusqueda} />
                    <Route path="detalle-producto/" component={DetalleItem} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Body;