import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';
import {Link} from "react-router-dom"
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const {createUser, updateUserProfile, signInGoogleHandler, signInGithubHandler} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            handleUpdateUserProfile(name, photoURL)
            form.reset();

        })
        .catch( e => setError(e.message));

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const googleSignIn = () =>{
        signInGoogleHandler(googleProvider)
        .then(result => {
            const users = result.user;
            console.log(users);
            
          })
          .catch(error => {
            console.log('error:', error)
          })
    }

    const githubSignIn = () =>{
        signInGithubHandler(githubProvider)
        .then(result => {
            const users = result.user;
            
            console.log(users)
            alert("Registration Successful");
          })
          .catch(error => {
            console.log('error:', error)
          })
    }

    return (
        <div className='my-5'>
            <h2>This is Your Registration Page</h2>
            <Form onSubmit={handleSubmit} className="w-50 mx-auto my-5 text-start">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <p>Have an account please <Link to="/login">Login</Link></p>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <br />
            <button className='btn btn-outline-primary my-3' onClick={googleSignIn}>Sign in with Google</button>
            <br />
            <button className='btn btn-outline-primary' onClick={githubSignIn}>Sign in with github</button>
        </div>

    );
};

export default Register;