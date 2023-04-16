import React from 'react';
import { useLoaderData } from 'react-router-dom';
function Loaderfetch(props) {
    const data=useLoaderData();
    console.log(data);  //used to load the closest loader data
    return (
        <div>
            {data.map((event)=>(
                <div key={event.studentId1}>

                <li>{event.firstName}</li>
                </div>
            ))}
        </div>
    );
}

export default Loaderfetch;