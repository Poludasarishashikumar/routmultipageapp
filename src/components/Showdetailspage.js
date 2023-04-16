import React, { useState } from 'react';
import { useParams,Link, json,useLoaderData } from 'react-router-dom';
function Showdetailspage(props) {
    const [data,setData]=useState([useLoaderData()]);

//    const data=useLoaderData();
    console.log(data);   
        
        
        return (
            <div>
              
              {data.map((event)=>(
                <div key={event.studentId1}>

                <li>{event.lastName}</li>
                <li>{event.firstName}</li>
                <li>{event.email}</li>
                <li>{event.studentId1}</li>
                </div>
                
            ))}
        
               <p><Link to='..'>Back</Link></p>
            </div>
        );
    
}

export default Showdetailspage;
export async function loader({request,params})
{
    let id=params.pId.substring(6,9);
    const response=await fetch('https://localhost:44325/api/Getstudents/'+id);
    if(!response.ok)
    {
        throw json({message:'Could not fetch'},{status:500});
    }
    else{
        console.log(response);
    return response;
    }
}