import React, {useState} from "react";
import {Link} from "@reach/router";
import {Container, Row, Form, Col, Button, Alert} from 'react-bootstrap';
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";


const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
          setEmail(value);
        }
      };

      const sendResetEmail = event => {
        event.preventDefault();
        auth
          .sendPasswordResetEmail(email)
          .then(() => {
              setEmailHasBeenSent(true);
            setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
          })
          .catch(() => {
            setError("Error resetting password");
          });
      };
    return(
        <div>
      <Container>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                <Form.Text className="text-muted">
                    Reset your password
                </Form.Text>
                {emailHasBeenSent && (<Alert variant="success">An email Has been sent to you</Alert>)}  
                {error !== null && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input 
                type="email" 
                placeholder="Enter email"
                name = "userEmail"
                id="userEmail"
                value={email}
                onChange={onChangeHandler}
                />
            </Form.Group>

            <Button variant="primary"
            onClick={event => {
              sendResetEmail(event);
            }}
            >
                Send me a reset Link!
            </Button>
        
            <p>
                <Link to = "SignIn">
                You can always sign in here!
                </Link>
            </p>
          </Form>
        </Col>
      </Row>
  </Container>
      
    </div>

    );
};

export default PasswordReset;