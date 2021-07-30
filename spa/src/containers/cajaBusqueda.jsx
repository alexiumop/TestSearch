import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Searcher from '../components/searcher';
import Logo from '../assets/Logo_ML.png';

const CajonDeBusqueda = props => {
    return (
        <>
            <Navbar style={{background: '#FFE600'}} >
                <Navbar.Brand>
                    <img src={Logo} alt="ML"/>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Searcher />
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default CajonDeBusqueda;