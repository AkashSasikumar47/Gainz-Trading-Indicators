import React, { useState } from 'react';
import styled from 'styled-components';
import AddIndicatorForm from '../components/Home/AddIndicatorForm/AddIndicatorForm';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const Button = styled.button`
    background-color: #0074d9;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
`;

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = () => {
        if (credentials.username === 'admin' && credentials.password === 'admin@890') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <FormContainer>
            {isLoggedIn ? (
                <AddIndicatorForm />
            ) : (
                <Form>
                    <FormField>
                        <Label>Username:</Label>
                        <Input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
                    </FormField>
                    <FormField>
                        <Label>Password:</Label>
                        <Input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
                    </FormField>
                    <Button type="button" onClick={handleLogin}>
                        Login
                    </Button>
                </Form>
            )}
        </FormContainer>
    );
};

export default Login;
