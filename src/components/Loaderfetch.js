import React from 'react';
import { useLoaderData,Link } from 'react-router-dom';
function Loaderfetch(props) {
    const data=useLoaderData();
    console.log(data);  //used to load the closest loader data
    return (
        <div>
            {data.map((event)=>(
                <Link to={event.studentId1}><div key={event.studentId1}>

                <li>{event.firstName}</li>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Loaderfetch;