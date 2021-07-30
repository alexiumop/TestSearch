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
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success"><img src={Lupa} alt="Lupa" /></Button>
            </Form>
        </>
    )
}

export default Searcher;