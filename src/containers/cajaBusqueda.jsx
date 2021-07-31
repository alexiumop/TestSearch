import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Searcher from '../components/searcher';
import Logo from '../assets/Logo_ML.png';

const CajonDeBusqueda = props => {
    return (
        <>
            <Navbar className="navBar-color navbar-expand">
                <div className="nav-inner-div">
                    <Navbar.Brand>
                        <img src={Logo} alt="ML"/>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Searcher />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default CajonDeBusqueda;