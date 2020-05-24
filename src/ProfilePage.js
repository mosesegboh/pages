import React, { useContext } from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import {UserContext} from './providers/UserProvider';
import { navigate } from "@reach/router";
import {auth} from "./firebase";


const ProfilePage = () => {
    const user = useContext(UserContext);
    const { displayName, email} = user;
    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
             <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
             <h2>{displayName}</h2>
            </Col>
            <Col xs={6} md={4}>
             <h3>{email}</h3>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
             <button onClick = {()=>{auth.signOut()}}>Sign out</button>
            </Col>  
        </Row>
        </Container>

    )
}

export default ProfilePage;