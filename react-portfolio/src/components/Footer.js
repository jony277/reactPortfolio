import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function Footer(){
return(
    <div>
        <Container>
            <Row>
                <Col className="align-items-center col-6">
                <p> Thank you for visiting my portfolio. Let's connect and make something awesome together! Reach out to me on [LinkedIn] or [Twitter].

© 2023 [Your Name]. All Rights Reserved.</p>

                </Col>
            </Row>
        </Container>
    </div>
)
};