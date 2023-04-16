import React from 'react';
import { Link } from 'react-router-dom';
function Home(props) {
    return (
        <div>
            <p>This is home</p>
            <p>
This lets you to 
            <Link to='/new'>NewPage</Link>
            </p> 
            <p>
This lets you to load details by the loader
            <Link to='/load'>Click here</Link>
            </p>         
        </div>
    );
}

export default Home;