import React from 'react';
import  Form  from './Form';
import { useRouteLoaderData } from 'react-router-dom';
function Editdata(props) {
const data=useRouteLoaderData('data-detail');
    return (
        <div>
            <Form data={data}/>
        </div>
    );
}

export default Editdata;