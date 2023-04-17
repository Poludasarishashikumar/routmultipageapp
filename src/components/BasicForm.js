import React from 'react';
import classes from './Form.module.css';
import { Form } from 'react-router-dom';
function BasicForm({method,data}) {
    return (
        <Form method='post' className={classes.form}>
             <p>
        <label htmlFor="title">FirstName</label>
        <input
          id="title"
          type="text"
          name="firstName"
          required
          defaultValue={data ? data.firstName:''}
        />
      </p>
      <p>
        <label htmlFor="title">lastName</label>
        <input
          id="title"
          type="text"
          name="lastName"
          required
          defaultValue= {data ? data.lastName:''}
        />
      </p>
      <p>
        <label htmlFor="title">Email</label>
        <input
          id="title"
          type="text"
          name="email"
          required
          defaultValue= {data ? data.email:''}
        />
      </p>  
      
      <div className={classes.actions}>
        <button type="button" >
          Cancel
        </button>
        <button >
           Save
        </button>
      </div>
      </Form>
    );
}

export default BasicForm;