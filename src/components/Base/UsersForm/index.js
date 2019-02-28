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

    return(
        <form onSubmit={submitHandler}>

            {/* NAME */}
            <FormGroup label="Full Name" labelFor="fullName">
                <InputGroup
                    name="name"
                    defaultValue={props.data.name} //new code
                    id="fullName"
                    placeholder="John Doe" />
            </FormGroup>

            {/* EMAIL */}
            <FormGroup label="E-Mail" labelFor="email">
                <InputGroup 
                    name="email"
                    defaultValue={props.data.email}
                    id="email"
                    placeholder="Yuusuke_takeru98@example.com" />
            </FormGroup>

            {/* AGE */}
            <FormGroup 
                label="Age" labelFor="age">
                <InputGroup
                    name="age"
                    defaultValue={props.data.age}
                    id="age"
                    placeholder="20" />
            </FormGroup>

            {/* GENDER */}
            <FormGroup label="Gender" labelFor="gender">
               <RadioGroup inline
                    onChange={() => {}}
                    id = "gender"
                    selectedDefaultValue={props.data.gender}
                    >
                    <Radio label= "Male" defaultValue="male"/>
                    <Radio label= "Female" defaultValue="female"/>
                </RadioGroup>
            </FormGroup>

            {/* COMPANY */}
            <FormGroup label="Company" labelFor="company">
                <InputGroup 
                    value = {props.data.company}
                    id="company"
                    placeholder = "Code Disrupters Inc." />
            </FormGroup>

            {/* ADDRESS */}
            <FormGroup label="Address" labelFor="address">
                <InputGroup 
                    defaultValue = {props.data.address}
                    id = "address"
                    placeholder= "Akihabara, Tokyo, Japan" />
            </FormGroup>

            {/* ABOUT */}
            <FormGroup label="About" labelFor="about">
                <InputGroup
                    defaultValue={props.data.about}
                    id="about"
                    placeholder="Ryūnosuke wa kochira" />
            </FormGroup>

            <Button text="Submit" intent="success" type="submit" />
        </form>
    )
}