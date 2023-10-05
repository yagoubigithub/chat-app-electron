import React, { useState } from 'react'
import { Alert } from 'reactstrap';

import validator from 'validator';
const StepThree = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    console.log(values)
    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstname) || validator.isEmpty(values.lastname)

    ) {
      setError("name and lastname  are required");
    } else {

      localStorage.setItem("profile" , JSON.stringify(values))
      nextStep();
    }
  };
  return (


    <form className='onbording' onSubmit={submitFormData}>
      <img src="./img/logo.png" className="login-logo" />

      {error ? <Alert color="danger">
        {error}
      </Alert> : ""}


      <h3 className='login-title'>What’s your Full Name?</h3>

      <div

        className='form-group-phone'
      >


        <input type="text" name="firstname"
          defaultValue={values.firstname}


          onChange={handleFormData("firstname")}
          placeholder='First Name' />


      </div>

      <div

        className='form-group-phone'
      >


        <input type="text" name="lastname"
          defaultValue={values.lastname}


          onChange={handleFormData("lastname")}
          placeholder='Last Name' />


      </div>
      <button className={` login-next login-next-black `}>Next</button>



    </form>
  )
}

export default StepThree