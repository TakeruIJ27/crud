import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; //new code
import {
    fetchOne,
    deleteUser,
    editUser,
    createUser
} from './actions';

import UsersForm from '../../../components/Base/UsersForm';


class Form extends React.Component{
    constructor(props){
        super(props);

        this.editUser=this.editUser.bind(this); //new
        this.createUser=this.createUser.bind(this); //new
    }

        componentDidMount(){ //new code
            const id = this.props.match.params.id;

            this.props.fetchOne(id);
        }

        componentWillMount(){ //new code
            this.props.deleteUser();
        }

        editUser(updateData){ //new code
            const id = this.props.data.id;
            this.props.editUser(id, updateData);
        }

        createUser(newEntry){ //new code
            this.props.createUser(newEntry);
        }


    render(){ //new code

        console.log(this.props);
        let formHandler = () => {};

        if(this.props.formState === 'edit'){
            formHandler = this.editUser;
        }
        else if(this.props.formState === 'create'){
            formHandler = this.createUser;
        }    

        return <UsersForm submit={formHandler} data={this.props.data} />
    }
}

    const mapStateToProps = state => ({ //new code
        data: state.users.user
    });

    const mapDispatchToProps = dispatch => ({ //new code
        fetchOne, deleteUser, editUser, createUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);