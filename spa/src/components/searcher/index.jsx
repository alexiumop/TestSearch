import React, {useState} from 'react';
import { FormControl, Form, Button } from 'react-bootstrap';
import httpClient from '../../server/httpClient';
import Lupa from '../../assets/ic_Search.png';

// function SubmitSearch(related) {
//     httpClient.getSimpleSearch(related)
//     .then(result => {
//         console.log('respuesta json:', result);
//     });
// }

const Searcher = () => {
    const [queryTyper, setQueryTyper] = useState('');
    const handleChange = event => {
        let query = event.target.value;
        setQueryTyper(query);
    }
    const handleSubmitSearch = () => {
        httpClient.getSimpleSearch(queryTyper)
        .then(result => {
            console.log('respuesta json:', result);
        });
    }
    return(
        <>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Nunca dejes de buscar"
                    className="nav-search-input"
                    onChange={event => handleChange(event)}
                    aria-label="Search"
                />
                <Button className="nav-button-search" onClick={handleSubmitSearch}><img src={Lupa} alt="Lupa" /></Button>
            </Form>
        </>
    )
}

export default Searcher;