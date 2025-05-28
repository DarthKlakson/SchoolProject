import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export const Login = () => (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <Row className="w-100 justify-content-center">
            <Col xs={12} md={6} lg={4}>
                <Card>
                    <Card.Body>
                        <h3 className="text-center mb-4">Logowanie</h3>
                        <Form>
                            <Form.Group controlId="loginEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Wprowadź email" />
                            </Form.Group>
                            <Form.Group controlId="loginPassword" className="mb-3">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control type="password" placeholder="Wprowadź hasło" />
                            </Form.Group>
                            <Button variant="success" type="submit" className="w-100">
                                Zaloguj się
                            </Button>
                        </Form>
                        <div className="text-center mt-3">
                            <Button variant="link">Chcę się zarejestrować!</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);