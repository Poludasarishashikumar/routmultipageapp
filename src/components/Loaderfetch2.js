import React from 'react';
import { useLoaderData } from 'react-router-dom';
function Loaderfetch2(props) {
    const data=useLoaderData();  //used to load the closest loader data
    // if(data.isError){
    //    return <p>{data.message}</p>
    // }
    console.log(data); 
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
            // return{isError:true,message:'Could not fetch data.'};//one way to show error
            throw new Response(JSON.stringify({message:'Could not fetch data'}),{
                status:500,
            });
          }
    
        //   const data = await response.json();
        //   return data;
        console.log(response);
        return response;
}
