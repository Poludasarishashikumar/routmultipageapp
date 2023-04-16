import React from 'react';
import Navigation from './Navigation';
import { useRouteError } from 'react-router-dom';

function ErrorPage(props) {
    const error=useRouteError();
    let title="An error Occured";
    let message="Something went wrong";
    if(error.status===500)
    {
        // message=JSON.parse(error.data).message;
        message=error.data.message;
    }
    if(error.status===404)
    {
        title="Not Found"
        message="Could not found page";
    }
    return (<>
        <Navigation/>
        <div title={title}>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    </>
    );
}

export default ErrorPage;