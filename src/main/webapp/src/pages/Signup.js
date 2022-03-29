import React, { useState, useEffect, } from 'react';
import { Col, Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { signup } from '../utils/api';



function Signup(props) {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function attemptSignup(e) {
        setErrorMessage("");
        e.preventDefault();
        if (password !== confirmPassword) {
            return setErrorMessage("Passwords do not match");
        }
        const response = await signup(username, email, password);
        if (response.ok) {
            window.location = "/";
        } else if (response.status === 400) {
            const err = await response.json();
            setErrorMessage(err.errorMessage);
        } else {
            alert("An Unknown Error has occurred, please try again.")
        }
    }
    return (
        <Container fluid className="d-flex justify-content-center align-items-center login-signup-image" style={{ "minHeight": "100vh" }}>
            <Container fluid="xxl">
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    <Col xl={4} md={6} sm={10} xs={11} className="loginDiv">
                        <h2 className="text-center mt-2">Sign Up</h2>
                        <form onSubmit={(e) => attemptSignup(e)}>
                            <div className="my-3">
                                <label htmlFor="username" >Username:</label>
                                <input type="username" id="username" className="text-center" minLength={4}
                                    maxLength={40} placeholder="Username" required valid
                                    onChange={(e) => setUsername(e.target.value)}></input>
                            </div>
                            <div className="my-3">
                                <label htmlFor="email" >Email:</label>
                                <input type="email" id="email" className="text-center" minLength={10} maxLength={40}
                                    required placeholder="yourEmail@email.com" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="my-3">
                                <label htmlFor="password" >Password:</label>
                                <input type="password" id="password" className="text-center" minLength={6} maxLength={25}
                                    required placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className="my-3">
                                <label htmlFor="passwordConfirm" >Confirm Password:</label>
                                <input type="password" id="passwordConfirm" className="text-center" minLength={6} maxLength={25}
                                    required placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            </div>
                            <p className="text-center text-danger">{errorMessage}</p>
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <button type="submit" className="button">Sign Up</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center align-items-center">
                    <Col className="loginDiv d-flex justify-content-center align-items-center" lg={4} md={6} xs={12}>
                        <p className="text-center py-2 m-0">Have an account? <a href="/login" className="text-link">Login</a></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Signup;