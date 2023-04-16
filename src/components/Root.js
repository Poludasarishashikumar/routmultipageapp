import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import classes from './Root.module.css';
function Root(props) {
    return <>
        <div>
            <Navigation/>
            
        </div>
        <main className={classes.main}>
            <Outlet/>
        </main>
    </>
    ;
}

export default Root;