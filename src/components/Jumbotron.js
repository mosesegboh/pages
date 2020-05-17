import React from 'react';
import {Jumbotron as Jumbo, Button} from 'react-bootstrap'; 
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';


const Styles = styled.div`
    .jumbo {
        background: url(${boatImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;

    }

    .overlay{
        background-color: #000;
        opacity: 0.0;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbo>
    </Styles>
)