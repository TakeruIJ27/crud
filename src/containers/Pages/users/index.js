import React from 'react';
import styled from 'styled-components'; //new code 03/01/19
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { 
    ButtonGroup,
    Button,
    Divider,
    Alert,
    MenuItem
} from '@blueprintjs/core';

import { Suggest } from '@blueprintjs/select'; //new code 03/01/19

import ReactTable from 'react-table';

import {
    fetchUsers,
    deleteUser,
    openDeleteModal,
    closeDeleteModal,
    searchUser
} from './actions';

const TableHead = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`; //new code 03/01/19

class Users extends React.Component {

   /* constructor(props){
        super(props);

            this.state ={ //new code
                isDeleteModalOpen: false,
                toDeleteId: null, //new code 02/27/19
            };
    } */ //code changes 02/28/19
   
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
                                    onClick={() => this.props.openDeleteModal(id)} />
                                </div>
                                </ButtonGroup>

                    );
                } 
            }];

        return (
        <div>
            <TableHead> 
                <Suggest 
                    items={this.props.data}
                        itemRenderer={(item, itemProps) => (
                            <MenuItem 
                                key={item.id}
                                onClick={itemProps.handleClick}
                                text={itemProps.index + 1 + " " + item.name}
                                active={itemProps.modifiers.active} /> //New code 03/01/19 for search bar
                        )}
                        inputValueRenderer={value => value.name}
                        onItemSelect={(item => this.props.searchUser(item.name))}
                        onQueryChange={this.props.searchUser}
                        popoverProps={{minimal:true}} />
            

            <Link to='users/create'> 
            <Button text="Add new User" intent="success" icon="plus"/>
            <hr />
            </Link>
                </TableHead>

        <ReactTable
            data={this.props.data}
            columns={columns} />
            
            
            <Alert  // new code 02/26/19 updated 02/28/19
            intent='danger'
            cancelButtonText='No'
            confirmButtonText='Yes'
            isOpen={this.props.toDelete.isModalOpen} //new code 02/28/19
            onConfirm={() => this.props.deleteUser(this.props.toDelete.id)} //new code 02/27/19 updated 02/28/19
            onCancel={this.props.closeDeleteModal}> 
            <p> Are You Sure You Want To Delete This Record? </p>
                </Alert>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    data: state.users.data, //data as props for users
    toDelete: state.users.toDelete //new code 02/28/19
});

export default connect(mapStateToProps, { fetchUsers, deleteUser, openDeleteModal, closeDeleteModal, searchUser })(Users); //new code 02/27/19 (deleteUser) updated 02/28/19