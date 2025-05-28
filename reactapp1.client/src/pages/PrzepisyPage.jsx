import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, ButtonGroup } from 'react-bootstrap';
import './PrzepisyPageStyle.css';

const dietOptions = [
    { id: 'keto', label: 'Keto' },
    { id: 'mediterranean', label: 'Śródziemnomorska' },
    { id: 'plant', label: 'Roślinna' }
];

const recipes = {
    keto: [
        { title: 'Omlet z awokado', img: './przepisyimg/1.jpg' },
        { title: 'Sałatka z łososia', img: './przepisyimg/2.jpg' },
        { title: 'Tatar wołowy', img: './przepisyimg/3.jpg' },
        { title: 'Placki z cukinii', img: './przepisyimg/4.jpg' },
        { title: 'Pieczony kurczak z ziołami', img: './przepisyimg/5.jpg' },
        { title: 'Stek z masłem czosnkowym', img: './przepisyimg/6.jpg' },
        { title: 'Krewetki w maśle', img: './przepisyimg/7.jpg' },
        { title: 'Zupa krem z brokułów', img: './przepisyimg/8.jpg' },
        { title: 'Roladki z bakłażana', img: './przepisyimg/9.jpg' }
    ],
    mediterranean: [
        { title: 'Sałatka grecka', img: './przepisyimg/10.jpg' },
        { title: 'Pasta al Pomodoro', img: './przepisyimg/11.jpg' },
        { title: 'Ryba pieczona z oliwą', img: './przepisyimg/12.jpg' },
        { title: 'Tabbouleh', img: './przepisyimg/13.jpg' },
        { title: 'Bruschetta', img: './przepisyimg/14.jpg' },
        { title: 'Kuskus z warzywami', img: './przepisyimg/15.jpg' },
        { title: 'Paella warzywna', img: './przepisyimg/16.jpg' },
        { title: 'Hummus', img: './przepisyimg/17.jpg' },
        { title: 'Gazpacho', img: './przepisyimg/18.jpg' }
    ],
    plant: [
        { title: 'Buddha bowl', img: './przepisyimg/19.jpg' },
        { title: 'Curry z ciecierzycy', img: './przepisyimg/20.jpg' },
        { title: 'Sałatka z quinoa', img: './przepisyimg/21.jpg' },
        { title: 'Wrap z tofu', img: './przepisyimg/22.jpg' },
        { title: 'Zupa soczewicowa', img: './przepisyimg/23.jpg' },
        { title: 'Smoothie zielone', img: './przepisyimg/24.jpg' },
        { title: 'Falafel', img: './przepisyimg/25.jpg' },
        { title: 'Gulasz warzywny', img: './przepisyimg/26.jpg' },
        { title: 'Pizza z warzywami', img: './przepisyimg/27.jpg' }
    ]
};

export const Przepisy = () => {
    const [selectedDiet, setSelectedDiet] = useState('keto');

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
                {recipes[selectedDiet].map((item, i) => (
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
                                <Button variant="warning" className="mt-auto align-self-center">
                                    Zobacz przepis
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};