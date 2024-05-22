import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const DashBoard = () => {
  return (
    <div className="container">
      <h2 className="my-4">DashBoard</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Cameras</Card.Title>
              <Card.Text>50</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Sites</Card.Title>
              <Card.Text>10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Customers</Card.Title>
              <Card.Text>30</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
