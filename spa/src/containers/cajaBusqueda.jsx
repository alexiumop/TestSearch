import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo_ML.png';

// function UpBar() {
//     return(
//         <Navbar bg="#FFE600" />
//     )
// }

const CajonDeBusqueda = props => {
    return (
        <>
            <Navbar style={{background: '#FFE600'}} >
                <Navbar.Brand>
                    <img src={Logo} />
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default CajonDeBusqueda;