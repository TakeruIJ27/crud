import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { 
    ButtonGroup,
    Button,
    Divider,
    Alert
} from '@blueprintjs/core';

import ReactTable from 'react-table';
import {
    fetchUsers,
    deleteUser,
} from './actions';

class Users extends React.Component {
    constructor(props){
        super(props);

            this.state ={ //new code
                isDeleteModalOpen: false,
                toDeleteId: null //new code 02/27/19
            };
    }
   
    componentDidMount() {
            this.props.fetchUsers();

    }
    
    render () {
        console.log("LIST OF DATA: ",this.props.data);

        const columns = [{
            Header: 'Identifier',
            accessor: '_id' // String-based value accessors!
        }, {
            Header: 'Name',
            accessor: 'name', //accessor ay galing sa data na pinapasa
        }, {
            Header: 'E-Mail',
            accessor: 'email' // Custom value accessors!
            
        }, 
        {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span>{props.value}</span>
        }, 
        {
                Header: 'Company',
                accessor: 'company' // Custom value accessors!
                
        },
        {
                Header: 'Address',
                accessor: 'address'
        },{
                Header: 'Actions',
                Cell: props => { //new code 02/26/19
                    const id = props.original.id; // 02/27/19

                    return(
                        <ButtonGroup minimal>
                            <Link to = {'/users/edit/' + id}>
                                <Button icon = 'edit' intent='warning'/>
                            </Link>
                            <Divider/>
                            <Link to ={'/users/view/' + id}>
                                <Button icon='eye-open' intent='primary'/>
                            </Link>
                            <Divider/>
                                <div> 
                                    <Button
                                    icon ='delete'
                                    intent='danger'
                                    onClick={() => this.setState({isDeleteModalOpen:true, toDeleteId: id})} />
                                </div>
                                </ButtonGroup>

                    );
                } 
            }];

        return (
        <div>
        <ReactTable
            data={this.props.data}
            columns={columns} />
            
            
        <Alert  // new code 02/26/19
            intent='danger'
            cancelButtonText='No'
            confirmButtonText='Yes'
            isOpen={this.state.isDeleteModalOpen}
            onConfirm={() => this.props.deleteUser(this.state.toDeleteId)} //new code 02/27/19
            onCancel={() => this.setState({isDeleteModalOpen:false})}>
            <p> Are You Sure You Want To Delete This Record? </p>
                </Alert>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    data: state.users.data //data as props for users
});

export default connect(mapStateToProps, {fetchUsers, deleteUser})(Users); //new code 02/27/19 (deleteUser)