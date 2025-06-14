import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Podaj imię i nazwisko';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Podaj adres email';
        } else {
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Nieprawidłowy format email';
            }
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Podaj numer telefonu';
        } else {
            
            const phoneRegex = /^[+]?\d{9,15}$/;
            const cleaned = formData.phone.replace(/[\s-]/g, '');
            if (!phoneRegex.test(cleaned)) {
                newErrors.phone = 'Nieprawidłowy numer telefonu';
            }
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Podaj temat wiadomości';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Podaj treść wiadomości';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Wiadomość musi mieć przynajmniej 10 znaków';
        }
        return newErrors;
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length) {
            setErrors(formErrors);
            return;
        }
        setErrors({});
        
        console.log('Wysyłanie formularza:', formData);
        setSubmitted(true);
        
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <Container className="py-5">
            <h2 className="text-center text-primary mb-4">Skontaktuj się z nami!</h2>
            <Row className="g-4">
                <Col md={6}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Imię i nazwisko</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Wpisz swoje imię i nazwisko"
                                value={formData.name}
                                isInvalid={!!errors.name}
                                onChange={handleChange('name')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Wpisz swój adres email"
                                value={formData.email}
                                isInvalid={!!errors.email}
                                onChange={handleChange('email')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="mb-3">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Wpisz numer telefonu"
                                value={formData.phone}
                                isInvalid={!!errors.phone}
                                onChange={handleChange('phone')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Label>Temat</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Temat wiadomości"
                                value={formData.subject}
                                isInvalid={!!errors.subject}
                                onChange={handleChange('subject')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.subject}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Wiadomość</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Twoja wiadomość"
                                value={formData.message}
                                isInvalid={!!errors.message}
                                onChange={handleChange('message')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="success" type="submit" disabled={submitted && !Object.keys(errors).length === 0}>
                            Wyślij
                        </Button>
                        {submitted && (
                            <div className="mt-3 text-success">
                                Dziękujemy! Twoja wiadomość została wysłana.
                            </div>
                        )}
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
};

export default Kontakt;