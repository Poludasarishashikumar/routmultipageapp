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
        </div>
    );
}

export default Home;