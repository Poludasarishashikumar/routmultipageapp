import React from 'react';
import classes from './Form.module.css';
function Form({method,data}) {
    return (
        <div>
             <p>
        <label htmlFor="title">FirstName</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={data ? data.firstName:''}
        />
      </p>
      <p>
        <label htmlFor="title">lastName</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue= {data ? data.lastName:''}
        />
      </p>
      <p>
        <label htmlFor="title">Email</label>
        <input
          id="title"
          type="text"
          name="title"
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
        </div>
    );
}

export default Form;