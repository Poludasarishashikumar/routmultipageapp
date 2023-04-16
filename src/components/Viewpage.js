import React from 'react';
import { useParams,Link } from 'react-router-dom';
function Viewpage(props) {
    const params=useParams();
    
    return (
        <div>
           <p>{params.pId}</p> 
           <p><Link to='..'>Back</Link></p>
        </div>
    );
}

export default Viewpage;