import React from 'react';
import { useLoaderData } from 'react-router-dom';
function Loaderfetch2(props) {
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

export default Loaderfetch2;

export  async function loader()
{
    const response = await fetch('https://localhost:44325/api/Getstudents');
          // console.log(response);
          if (!response.ok) {
            // throw new Error('Something went wrong!');
          }
    
          const data = await response.json();
          return data;
}
