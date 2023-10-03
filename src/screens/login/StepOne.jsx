import React, { useState } from 'react'
import { Alert  } from 'reactstrap';

import validator from 'validator';


const StepOne = ({ nextStep, handleFormData, values }) => {

    //creating error state for validation
    const [error, setError] = useState(false);

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to step 2
        if (
            validator.isEmpty(values.phone) 
           
        ) {
            setError("phone number is required");
        } else {
            nextStep();
        }
    };
    return (


        <form className='onbording' onSubmit={submitFormData}>
            <img src="./img/logo.png" className="login-logo" />

            {error ?   <Alert color="danger">
    {error}
  </Alert> : ""}


            <h3 className='login-title'>What’s your Phone Number?</h3>

            <div

                className='form-group-phone'
            >

                <button>+213 </button>
                <input type="text"   name="phone"
                defaultValue={values.firstName}
                
               
                onChange={handleFormData("phone")} 
                placeholder='Phone Number' />


            </div>
            <button className='login-next login-next-black'>Next</button>



        </form>
    )
}

export default StepOne