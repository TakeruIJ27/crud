import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; //new code
import {
    fetchOne,
    editUser,
    createUser,
    clearUser,
} from './actions';

import FilterForm from '../../../components/Base/FilterForm';


class Form extends React.Component{
    constructor(props){
        super(props);

        this.editUser=this.editUser.bind(this); //new
        this.createUser=this.createUser.bind(this); //new
        this.handleChange = this.handleChange.bind(this); //new
    }

        componentDidMount(){ //new code
            const id = this.props.match.params.id;

            this.props.fetchOne(id);
        }

        componentWillUnmount(){
            this.props.clearUser();
        }

        editUser(updateData){ //new code
            const id = this.props.data.id;
            this.props.editUser(id, updateData);
        }

        createUser(newEntry){ //new code
            this.props.createUser(newEntry);
        }

    handleChange(e) { //new code 02/28/19
            this.setState({
                ...this.state,
                [e.target.name]: e.target.value
            });
        }


    render(){ //new code

        //console.log(this.props);
        let formHandler = () => {};

        if(this.props.formState === 'edit'){
            formHandler = this.editUser;
        }
        else if(this.props.formState === 'create'){
            formHandler = this.createUser;
        }    

        const data = {  //new code 02/28/19
            ...this.props.data,
            ...this.state
        }

        return <FilterForm
            formState={this.props.formState} //new code 02/28/19
            handleChange={this.handleChange} //new code 02/28/19
            submit={formHandler} 
            data={data}  />
    }
}

    const mapStateToProps = state => ({ //new code
        data: state.users.user
    });

    const mapDispatchToProps = dispatch => bindActionCreators({fetchOne, clearUser, editUser, createUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);