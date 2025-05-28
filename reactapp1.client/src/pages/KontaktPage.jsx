import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Kontakt = () => (
    <Container className="py-5">
        <h2 className="text-center text-primary mb-4">Skontaktuj się z nami!</h2>
        <Row className="g-4">
            <Col md={6}>
                <Form>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Imię i nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz swoje imię i nazwisko" />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Wpisz swój adres email" />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control type="tel" placeholder="Wpisz numer telefonu" />
                    </Form.Group>

                    <Form.Group controlId="formSubject" className="mb-3">
                        <Form.Label>Temat</Form.Label>
                        <Form.Control type="text" placeholder="Temat wiadomości" />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Twoja wiadomość" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Wyślij
                    </Button>
                </Form>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center text-center">
                <h4>FitFIX sp. z o. o.</h4>
                <p>ul. Mickiewicza 16A</p>
                <p>44-270 Kraków</p>
                <h5 className="mt-4">Osoba kontaktowa:</h5>
                <p>Maksymilian Łach</p>
                <p>+48 678 345 222</p>
            </Col>
        </Row>
    </Container>
);