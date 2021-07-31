import React from 'react';
import { FormControl, Form, Button } from 'react-bootstrap';
import Lupa from '../../assets/ic_Search.png';

const Searcher = () => {
    return(
        <>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Nunca dejes de buscar"
                    className="nav-search-input"
                    aria-label="Search"
                />
                <Button className="nav-button-search"><img src={Lupa} alt="Lupa" /></Button>
            </Form>
        </>
    )
}

export default Searcher;