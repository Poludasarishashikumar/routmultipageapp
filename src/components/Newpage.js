import React from 'react';
import BasicForm from './BasicForm';
import { json, redirect } from 'react-router-dom';

function Newpage(props) {
    return (
        <div>
           <BasicForm/>
        </div>
    );
}

export default Newpage;
export async function action({request,params}){
    const data=await request.formData();
    const enteredData={
        firstName:data.get('firstName'),
        lastName:data.get('lastName'),
        email:data.get('email'),
    }
    const response=await fetch('https://localhost:44325/api/Poststudents',{
        method:'POST',
    body:JSON.stringify(enteredData),
    headers:{
        'Content-Type':'application/json'
    }
    });
    if(!response.ok){
        return json({message:'Could not fetch data'},
            {
                status:500
            },);
    }
    return redirect('/load');
}