import React from 'react';
import { useParams } from 'react-router-dom';
function Viewpage(props) {
    const params=useParams();
    
    return (
        <div>
           <p>{params.pId}</p> 
        </div>
    );
}

export default Viewpage;