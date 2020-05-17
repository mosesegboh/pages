import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import {UserContext} from './providers/UserProvider';
import { navigate } from "@reach/router";
import {auth} from "./firebase";


const ProfilePage = () => {
    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
             <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
             <h2>Faruq</h2>
            </Col>
            <Col xs={6} md={4}>
             <h3>faruq123@gmail.com</h3>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
             <button>Sign out</button>
            </Col>  
        </Row>
        </Container>

    )
}

export default ProfilePage;