import React, { useState, useEffect, } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { login } from '../utils/api';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function attemptLogin(e) {
        e.preventDefault();
        setErrorMessage("");
        const response = await login(email, password);
        if (response.ok) {
            window.location = "/";
        } else if (response.status === 400) {
            const error = await response.json();
            setErrorMessage(error.errorMessage);
        }  else {
            alert("An unknown error has occurred, please try again later!")
        }
    }

    useEffect(() => {

    }, []);
    return (
        <Container fluid className="d-flex justify-content-center align-items-center login-signup-image" style={{"minHeight": "100vh"}}>  
            <Container fluid="xxl" >
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    <Col lg={4} md={6} xs={12} className="loginDiv">
                        <h2 className="text-center m-0 mt-2 fs-1 Vermin-Vibes">Login</h2>
                        <form onSubmit={(e) => attemptLogin(e)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="mb-2" >Email:</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="text-center" maxLength={40} required placeholder="yourEmail@email.com"></input>
                            </div>
                            <div className="my-3">
                                <label htmlFor="password" className="mb-2">Password:</label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="text-center" minLength={6} maxLength={25} required placeholder="Password"></input>
                            </div>
                            <p className="text-danger text-center">{errorMessage}</p>
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <button type="submit" className="button">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center align-items-center">
                    <Col className="loginDiv d-flex justify-content-center align-items-center" lg={4} md={6} xs={12}>
                        <p className="text-center py-2 m-0">Dont have an account? <a href="/signup" className="text-link">Sign Up</a></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Login;