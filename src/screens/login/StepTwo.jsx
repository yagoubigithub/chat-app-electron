import React, { useState } from 'react'
import { Alert } from 'reactstrap';

import validator from 'validator';

const StepTwo = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.code)

    ) {
      setError("code is required");
    } else {
      nextStep();
    }
  };
  return (


    <form className='onbording' onSubmit={submitFormData}>
      <img src="./img/logo.png" className="login-logo" />

      {error ? <Alert color="danger">
        {error}
      </Alert> : ""}


      <h3 className='login-title'>+1 234 543 5664 33</h3>

      <small className="text-muted align-center">
        We have sent you an SMS with the code
      </small>
      <div

        className='form-group-phone'
      >


        <input type="text" name="code"
          defaultValue={values.firstName}


          onChange={handleFormData("code")}
          placeholder='Code' />


      </div>
      <button className={` login-next ${values.code ? 'login-next-black' : 'login-next-gray'}`} >Next</button>



    </form>
  )
}

export default StepTwo