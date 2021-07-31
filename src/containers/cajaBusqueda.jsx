import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Searcher from '../components/searcher';
import Logo from '../assets/Logo_ML.png';
import { Link } from 'react-router-dom';

const CajonDeBusqueda = props => {
    return (
        <>
            <Navbar className="navBar-color navbar-expand">
                <div className="nav-inner-div">
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Logo} alt="ML"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Searcher {...props} />
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default CajonDeBusqueda;