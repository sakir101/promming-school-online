import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert("Login Successful");
                form.reset();
                navigate(from, { replace: true });
            }).catch(error => setError(error.message))
    }
    return (
        <div className='my-5'>
            <h2>This is Your Login Page</h2>
            <Form onSubmit={handleSubmit} className="w-50 mx-auto my-5 text-start">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>
            <p>Don't have an account please <Link to="/register">Signup</Link></p>

        </div>
    );
};

export default Login;