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
                    <Route exact path="/" render={props => (
                        <CajonDeBusqueda {...props} />
                    )} />
                    <Route exact path="/items" render={props => (
                        <ResultadosBusqueda {...props} />
                    )} />
                    <Route path="detalle-producto/" component={DetalleItem} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Body;