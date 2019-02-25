import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReactTable from 'react-table';
import {
    fetchUsers,
    fetchOne,
    editUser,
    deleteUser,
    createUser
} from './actions';

class Users extends React.Component {
   
    componentDidMount() {
            this.props.fetchUsers();

    }
    
    render () {
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
                Cell: props => (
                <ul>
                    <li><Link to="/users">Edit</Link></li>
                    <li><Link to="/users">View</Link></li>
                    <li><Link to="/users">Delete</Link></li>
                </ul>
                )
            }]

        return <ReactTable
            data={this.props.data}
            columns={columns}
        />
    
    }

}


const mapStateToProps = state => ({
    data: state.users.data
});

export default connect(mapStateToProps, {fetchUsers})(Users);