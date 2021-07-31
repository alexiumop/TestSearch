import React, {useEffect, useState} from 'react';
import httpClient from '../../server/httpClient';

const Items = props => {
    const [itemResult] = useState(JSON.parse(props.location.state));
    const [descText, setDescText] = useState('');
    useEffect(() => {
        let id = itemResult.data.id 
        httpClient.getSimpleProductByIdDesc(id)
        .then(description => {
            setDescText(description.data.plain_text);
        })
    }, [])
    return(
        <>
            <div>
                {descText}
            </div>
        </>
    )
}

export default Items;