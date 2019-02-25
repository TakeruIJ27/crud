import React from 'react';
import serialize from 'form-serialize';
import {
    FormGroup,
    InputGroup,
    RadioGroup,
    Radio,
    Buton
}from '@blueprintjs/core';

export default  function UsersForm (props) {
    
    const submitHandler = form => { //galing sa return <form>
        form.preventDefault(); //prevents the default behavior of form

        const serializedValue = serialize(form, {hash: true}); //
        props.submit(serializedValue);
    }

    return(
        <form onSubmit={submitHandler}>
            {/* NAME */}
            <FormGroup label = "Full Name" labelFor="fullname">
                <InputGroup 
                name = "name" 
                value={props.name}
                    id="name"
                    placeholder="Takeru Yuusuke" />
            </FormGroup>
            {/* EMAIL */}
            <FormGroup label="E-Mail" labelFor="email">
                <InputGroup 
                    name="email"
                    value={props.email}
                    id="email"
                    placeholder="Yuusuke_takeru98@example.com" />
            </FormGroup>
            {/* AGE */}
            <FormGroup 
                label="Age" labelFor="age">
                <InputGroup
                    name="age"
                    value={props.age}
                    id="age"
                    placeholder="Yuusuke_takeru98@example.com" />
            </FormGroup>
            {/* GENDER */}
            <FormGroup label="Gender" labelFor="gender">
               <RadioGroup
                    id = "gender"
                    selectedValue={props.gender}
                    >
                    <Radio label= "Male" value="male"/>
                    <Radio label= "Female" value="female"/>
                    </RadioGroup>
            </FormGroup>
            {/* COMPANY */}
            <FormGroup label="Company" labelFor="company">
                <InputGroup 
                    value = {props.company}
                    id="company"
                    placeholder = "Code Disrupters Inc." />
            </FormGroup>
            {/* ADDRESS */}
            <FormGroup label="Address" labelFor="address">
                <InputGroup 
                    value = {props.address}
                    id = "address"
                    placeholder= "Akihabara, Tokyo, Japan" 
                    />
            </FormGroup>
            {/* ABOUT */}
            <FormGroup label="About" labelFor="about">
                <InputGroup
                    value={props.about}
                    id="about"
                    placeholder="Otaku, Otamegane"
                />
            </FormGroup>
            <Button text="Submit" intent="success" type="submit" />
        </form>
    )
}