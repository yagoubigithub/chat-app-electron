import React, { useEffect } from 'react'
import {Navigate ,   useNavigate } from "react-router-dom";

import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import "./login.css"

const Login = () => {

    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("profile")){
            navigate('/home')
        }

    } , [])
    const [step, setstep] = useState(1);

    //state for form data
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        code : ""
    })


    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const { value } = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }

    switch (step) {
        case 1:
            return (<>

<StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
            </>)

          


        case 2:
            return (<>

<StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            </>)

        


        case 3:
            return (<>

<StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
            </>)

            break;

        default:
            return <Navigate to="/home" />;
            break;
    }

  
}

export default Login