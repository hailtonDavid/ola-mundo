import React from 'react';
import './calculadora.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Calculadora() {
  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readonly"
              data-testid="txtNumeros" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light">
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning">
              /
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
