import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function generingBreads(data) {
    let typeOfCategory = data.location.state.filters;
    return typeOfCategory.map(categories => {
        return categories.values.map((names, index) => {
            return(
                <Breadcrumb.Item className="breadcrumb" key={index} href="#" as="div">
                    {names.name}
                </Breadcrumb.Item>
            )
        })
    })
}
const BreadcrumbProduct = props => {
    return(
        <>
            <Breadcrumb>
                {generingBreads(props)}
            </Breadcrumb> 
        </>
    )
}

export default BreadcrumbProduct