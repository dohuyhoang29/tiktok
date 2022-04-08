import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Add() {
    const LIST_USERS = JSON.parse(localStorage.getItem('users'));

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')

    const handleAddUser = () => {
        const user = {
            fullName: fullName,
            email: email
        };

        let list = LIST_USERS ?? [] ;
        list.push(user);

        localStorage.setItem("users", JSON.stringify(list));
    }

    return (
        <>
            <h1>Add User</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Button type="button" onClick={handleAddUser}>Add</Button>
            </Form>
        </>
    );

}

export default Add