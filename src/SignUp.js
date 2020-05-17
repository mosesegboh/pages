import React, {useState} from "react";
import { Link } from "@reach/router";
import {Container, Row, Form, Col, Button, Alert} from 'react-bootstrap';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler = 
            (event,email, password) => {
            event.preventDefault();
            setEmail("");
            setPassword("");
            setDisplayName("");
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
          else if(name === 'displayName'){
            setDisplayName(value);
          }
      };

  return (
    <div>
      <Container>
            <Row className="justify-content-md-center">
            <Form.Text className="text-muted">
                Sign Up Here!
              </Form.Text>
            <Col xs={6}>
            {error !== null && <Alert variant="danger">{error}</Alert>}
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Display Name</Form.Label>
            <input 
            type="text" 
            placeholder="Enter Display Name"
            name = "userEmail"
            id="userEmail"
            value={displayName}
            onChange={(event) => onChangeHandler(event)}
            />
            <Form.Text className="text-muted">
            We'll never share your Display Name with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input 
            type="email" 
            placeholder="Enter email"
            name = "userEmail"
            id="userEmail"
            value={email}
            onChange={(event) => onChangeHandler(event)}
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
            type="password"
            placeholder="Password"
            name="userPassword"
            value = {password}
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
            />
        </Form.Group>

        <Button variant="primary" onClick = {(event) => {createUserWithEmailAndPasswordHandler(event,email,password)}}>
            Sign Up
        </Button>
        <p>or</p>
        <Button variant="primary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event,email,password)}}>
            Sign In With Google
        </Button>
        <p>
            Already have an account?{" "}
            <Link to = "SignIn">
            Sign Up Here
            </Link>{" "}
            <br/>{" "}
        </p>
        </Form>
        </Col>
        </Row>
        </Container>
      
    </div>
  );
};
export default SignUp;