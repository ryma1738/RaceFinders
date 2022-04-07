import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Navigator extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {

        return (
            <Container fluid className="nav-bar sticky-top" >
                <Container fluid="xxl">
                    <Row>
                        <Col lg={6} >
                            <a href="/" className="no-link"><h1 className="Vermin-Vibes fs-10 m-0">Race Finders</h1></a>
                        </Col>
                        <Col lg={6} md={4} xs={2} className="d-flex justify-content-end align-items-center">
                            <button className="noButton" onClick={() => window.location = "/login"}>login</button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Navigator;