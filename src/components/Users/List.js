import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.setState({ users: [{ id: 1, name: "tran van test", email: 'test@gmail.com' }] });
    }

    componentDidUpdate(preProps, preStates) {
        if (preStates.users !== this.state.users) {
            console.log("Users updated");
        }
    }

    componentWillUnmount() {
        console.log("un mount");
    }

    handleClickEdit() {
        console.log('click me');
    }

    render() {
        return (
            <>
                <h2>User List</h2>
                <Link to="/user/add">
                    <Button variant='success' size="sm" >Create new</Button>
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to="/user/edit">
                                            <Button className="mx-2" variant="warning" size="sm" onClick={this.handleClickEdit}>Edit</Button>
                                        </Link>
                                        <Button variant="danger" size="sm">Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table>
            </>
        );
    }
}

export default UserList;