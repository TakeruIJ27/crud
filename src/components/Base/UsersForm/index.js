import React from 'react';
import serialize from 'form-serialize';
import {
    FormGroup,
    InputGroup,
    RadioGroup,
    Radio,
    Button
}from '@blueprintjs/core'; //new code

export default function UsersForm (props) {
    
    const submitHandler = event => { //galing sa return <form> -> form to event (change) = new code
        event.preventDefault(); //prevents the default behavior of form

        const serializedValue = serialize(event.target, {hash: true}); //
        props.submit(serializedValue);
    }

    console.log("THIS IS THE FORMSTATE: ", props.formState); //new code 02/28/19

    return(
        <form onSubmit={submitHandler}>

            {/* NAME */}
            <FormGroup label="Full Name" labelFor="fullName">
                <InputGroup
                    name="name"
                    disabled={props.formState === "view"} //new code 02/28/19
                    defaultValue={props.data.name} //new code
                    id="fullName"
                    placeholder="John Doe" />
            </FormGroup>

            {/* EMAIL */}
            <FormGroup label="E-Mail" labelFor="email">
                <InputGroup 
                    name="email"
                    disabled={props.formState === "view"} //new code 02/28/19
                    defaultValue={props.data.email} 
                    id="email"
                    type="email"
                    placeholder="Yuusuke_takeru98@example.com" />
            </FormGroup>

            {/* AGE */}
            <FormGroup 
                label="Age" labelFor="age">
                <InputGroup
                    name="age"
                    diabled={props.fromState === "view"} //new code 02/28/19
                    defaultValue={props.data.age}
                    id="age"
                    type="number"
                    placeholder="20" />
            </FormGroup>

            {/* GENDER */}
            <FormGroup label="Gender" labelFor="gender">
               <RadioGroup inline
                    disabled={props.formState === "view"}
                    name = "gender"
                    onChange={props.handleChange}
                    id = "gender"
                    selectedValue={props.data.gender}>
                    <Radio label= "Male" value="male"/>
                    <Radio label= "Female" value="female"/>
                </RadioGroup>
            </FormGroup>

            {/* COMPANY */}
            <FormGroup label="Company" labelFor="company">
                <InputGroup
                    disabled={props.formState === "view"} //new code 02/28/19
                    name = 'company' 
                    defaultValue = {props.data.company}
                    id="company"
                    placeholder = "Code Disrupters Inc." />
            </FormGroup>

            {/* ADDRESS */}
            <FormGroup label="Address" labelFor="address">
                <InputGroup 
                    disabled={props.formState === "view"} //new code 02/28/19
                    name = 'address'
                    defaultValue = {props.data.address}
                    id = "address"
                    placeholder= "Akihabara, Tokyo, Japan" />
            </FormGroup>

            {/* ABOUT */}
            <FormGroup label="About" labelFor="about">
                <InputGroup
                    disabled={props.formState === 'view'} //new code 02/28/19
                    name = 'about'
                    defaultValue={props.data.about}
                    id="about"
                    placeholder="Ryūnosuke wa kochira" />
            </FormGroup>

            <Button disabled={props.formSate === 'view'} text="Submit" intent="success" type="Submit" /> 
        </form>
    )
}