import React from 'react';
import Navigation from './Navigation';
import { Outlet,useNavigation } from 'react-router-dom';
import classes from './Root.module.css';
function RootLoad(props) {
    const navigation=useNavigation();   //used to know weather we are in active transition or not by that state.
    
    return <>
        {/* <div>
            <Navigation/>
            
        </div> */}
        <main className={classes.main}>
            {navigation.state==='loading' &&<p>Loading...</p>

}
            <Outlet/>
        </main>
    </>
    ;
}

export default RootLoad;