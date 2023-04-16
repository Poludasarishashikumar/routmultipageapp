import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navigateus(props) {
    const navigate=useNavigate();
const btnHandler=(event)=>{
    event.preventDefault();
   navigate('/');
}

    return (
        <div>
           <p>Navigation by usenavigate</p>
           <button  onClick={btnHandler}></button> 
        </div>
    );
}

export default Navigateus;