import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

function Root(props) {
    return <>
        <div>
            <Navigation/>
            
        </div>
        <main>
            <Outlet/>
        </main>
    </>
    ;
}

export default Root;