import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    FormGroup,
    InputGroup,
    RadioGroup,
    Radio,
    
} from '@blueprintjs/core'; //new code

const StyledUsersFilter = styled.div``;


function FilterForm(props){
    return (
        <StyledUsersFilter>
        <FormGroup label="Name" labelFor="name">
            <InputGroup 
            name="name" 
            onBlur={e => props.handlerChange(e.target.name, e.target.value)} 
            type="text" 
            id="name" 
            placeholder="Ryuunosuke Takeru"/>
        </FormGroup>

            <FormGroup label="Email" labelFor="email">
                <InputGroup 
                name="email" 
                onBlur={e => props.handlerChange(e.target.name, e.target.value)} 
                type="email" 
                id="email" 
                placeholder="yuusuke@gmail.com" />
            </FormGroup>

            <FormGroup label="Age" labelFor="age">
                <InputGroup 
                name="age" 
                onBlur={e => props.handlerChange(e.target.name, e.target.value)} 
                type="number" 
                id="age" 
                placeholder="21" />
            </FormGroup>

            <FormGroup label="Company" labelFor="company">
                <InputGroup 
                name="company" 
                onBlur={e => props.handlerChange(e.target.name, e.target.value)} 
                type="text" 
                id="company" 
                placeholder="Code Disruptors Inc." />
            </FormGroup>

            <FormGroup label="Gender" labelFor="gender">
                <RadioGroup 
                name="gender" 
                id="gender"
                onChange={e => props.handlerChange(e.target.name, e.target.value)} 
                selectedValue={props.form.gender}
                >
                    <Radio label="Male" value="male"/>
                    <Radio label="Female" value="female"/>
                </RadioGroup>
            </FormGroup>
    </StyledUsersFilter>
    )
}




export default FilterForm;