import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    ButtonGroup,
    Modal,
    Form,
    Alert
} from 'react-bootstrap';
import './PrzepisyPageStyle.css';

const dietOptions = [
    { id: 'keto', label: 'Keto' },
    { id: 'mediterranean', label: 'Śródziemnomorska' },
    { id: 'plant', label: 'Roślinna' }
];

const recipes = {
    keto: [
        { title: 'Omlet z awokado', img: './przepisyimg/1.jpg', desc: '' },
        { title: 'Sałatka z łososia', img: './przepisyimg/2.jpg', desc: '' },
        { title: 'Tatar wołowy', img: './przepisyimg/3.jpg', desc: '' },
        { title: 'Placki z cukinii', img: './przepisyimg/4.jpg', desc: '' },
        { title: 'Pieczony kurczak z ziołami', img: './przepisyimg/5.jpg', desc: '' },
        { title: 'Stek z masłem czosnkowym', img: './przepisyimg/6.jpg', desc: '' },
        { title: 'Krewetki w maśle', img: './przepisyimg/7.jpg', desc: '' },
        { title: 'Zupa krem z brokułów', img: './przepisyimg/8.jpg', desc: '' },
        { title: 'Roladki z bakłażana', img: './przepisyimg/9.jpg', desc: '' }
    ],
    mediterranean: [
        { title: 'Sałatka grecka', img: './przepisyimg/10.jpg', desc: '' },
        { title: 'Pasta al Pomodoro', img: './przepisyimg/11.jpg', desc: '' },
        { title: 'Ryba pieczona z oliwą', img: './przepisyimg/12.jpg', desc: '' },
        { title: 'Tabbouleh', img: './przepisyimg/13.jpg', desc: '' },
        { title: 'Bruschetta', img: './przepisyimg/14.jpg', desc: '' },
        { title: 'Kuskus z warzywami', img: './przepisyimg/15.jpg', desc: '' },
        { title: 'Paella warzywna', img: './przepisyimg/16.jpg', desc: '' },
        { title: 'Hummus', img: './przepisyimg/17.jpg', desc: '' },
        { title: 'Gazpacho', img: './przepisyimg/18.jpg', desc: '' }
    ],
    plant: [
        { title: 'Buddha bowl', img: './przepisyimg/19.jpg', desc: '' },
        { title: 'Curry z ciecierzycy', img: './przepisyimg/20.jpg', desc: '' },
        { title: 'Sałatka z quinoa', img: './przepisyimg/21.jpg', desc: '' },
        { title: 'Wrap z tofu', img: './przepisyimg/22.jpg', desc: '' },
        { title: 'Zupa soczewicowa', img: './przepisyimg/23.jpg', desc: '' },
        { title: 'Smoothie zielone', img: './przepisyimg/24.jpg', desc: '' },
        { title: 'Falafel', img: './przepisyimg/25.jpg', desc: '' },
        { title: 'Gulasz warzywny', img: './przepisyimg/26.jpg', desc: '' },
        { title: 'Pizza z warzywami', img: './przepisyimg/27.jpg', desc: '' }
    ]
};

export const Przepisy = () => {
    const [selectedDiet, setSelectedDiet] = useState('keto');
    const [allRecipes, setAllRecipes] = useState(recipes);
    const [showModal, setShowModal] = useState(false);
    const [newRecipe, setNewRecipe] = useState({ title: '', img: null, desc: '' });
    const [errors, setErrors] = useState({});

    const handleFileChange = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ev => {
                setNewRecipe(r => ({ ...r, img: ev.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validate = () => {
        const errs = {};
        if (!newRecipe.title.trim()) errs.title = 'Podaj nazwę przepisu';
        if (!newRecipe.img) errs.img = 'Dodaj zdjęcie';
        if (!newRecipe.desc.trim()) errs.desc = 'Dodaj opis';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;
        setAllRecipes(prev => ({
            ...prev,
            [selectedDiet]: [{ ...newRecipe }, ...prev[selectedDiet]]
        }));
        setNewRecipe({ title: '', img: null, desc: '' });
        setErrors({});
        setShowModal(false);
    };

    return (
        <Container className="py-4">
            <h2 className="text-center mb-4">Przepisy</h2>

            <div className="d-flex justify-content-center mb-4">
                <ButtonGroup>
                    {dietOptions.map(d => (
                        <Button
                            key={d.id}
                            variant={selectedDiet === d.id ? 'success' : 'outline-secondary'}
                            onClick={() => setSelectedDiet(d.id)}
                        >
                            {d.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <Row xs={1} md={3} className="g-4">
                {allRecipes[selectedDiet].map((item, i) => (
                    <Col key={i}>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={item.img}
                                alt={item.title}
                                className="recipe-img"
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-center">{item.title}</Card.Title>
                                <Card.Text className="flex-grow-1">{item.desc}</Card.Text>
                                <Button variant="warning" className="mt-auto align-self-center">
                                    Zobacz przepis
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    Dodaj przepis
                </Button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowy przepis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="danger">
                            {Object.values(errors).map((err, idx) => (
                                <div key={idx}>{err}</div>
                            ))}
                        </Alert>
                    )}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwa przepisu</Form.Label>
                            <Form.Control
                                type="text"
                                value={newRecipe.title}
                                onChange={e => setNewRecipe(r => ({ ...r, title: e.target.value }))}
                                isInvalid={!!errors.title}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dodaj zdjęcie</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                isInvalid={!!errors.img}
                            />
                            {newRecipe.img && (
                                <img
                                    src={newRecipe.img}
                                    alt="Podgląd"
                                    className="img-fluid mt-2"
                                />
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newRecipe.desc}
                                onChange={e => setNewRecipe(r => ({ ...r, desc: e.target.value }))}
                                isInvalid={!!errors.desc}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Dodaj
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};