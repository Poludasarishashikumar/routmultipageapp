import React from 'react';
import  BasicForm  from './BasicForm';
import { useRouteLoaderData } from 'react-router-dom';
function Editdata(props) {
const data=useRouteLoaderData('data-detail');
    return (
        <div>
            <BasicForm data={data}/>
        </div>
    );
}

export default Editdata;