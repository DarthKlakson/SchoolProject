import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Collapse } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarCustomStyles.css';

export const Jadlospis = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dishName, setDishName] = useState('');
    const [products, setProducts] = useState('');
    const [calories, setCalories] = useState('');
    const [limitCalories, setLimitCalories] = useState(2000);
    const [caloriesForDay, setCaloriesForDay] = useState({});
    const [history, setHistory] = useState([]);
    const [openHistory, setOpenHistory] = useState(false);

    const handleAddDish = () => {
        const newDish = { dishName, products, calories: parseInt(calories, 10), date: selectedDate };
        setHistory(prev => [...prev, newDish]);
        const key = selectedDate.toDateString();
        setCaloriesForDay(prev => ({
            ...prev,
            [key]: prev[key] ? [...prev[key], newDish] : [newDish]
        }));
        setDishName('');
        setProducts('');
        setCalories('');
    };

    const getDayColor = date => {
        const key = date.toDateString();
        const total = caloriesForDay[key]?.reduce((sum, d) => sum + d.calories, 0) || 0;
        if (total > limitCalories) return 'bg-danger';
        if (total > 0) return 'bg-success';
        return '';
    };

    const tileContent = ({ date }) => {
        const key = date.toDateString();
        const dishes = caloriesForDay[key] || [];
        return (
            <div style={{ fontSize: 12, textAlign: 'center', padding: 2 }}>
                {dishes.map((d, i) => (
                    <div key={i}>{d.dishName} - {d.calories} kcal</div>
                ))}
            </div>
        );
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-5">Dodaj Danie do Jadłospisu</h2>
            <Row className="justify-content-center">
                <Col md={6}> {/* Formularz o połowę szerokości */}
                    <Card className="mb-4">
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="dishName" className="mb-3">
                                    <Form.Label>Nazwa Dania</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={dishName}
                                        onChange={e => setDishName(e.target.value)}
                                        placeholder="Wpisz nazwę dania"
                                    />
                                </Form.Group>
                                <Form.Group controlId="products" className="mb-3">
                                    <Form.Label>Produkty</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={products}
                                        onChange={e => setProducts(e.target.value)}
                                        placeholder="Wpisz produkty"
                                    />
                                </Form.Group>
                                <Form.Group controlId="calories" className="mb-3">
                                    <Form.Label>Kalorie</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={calories}
                                        onChange={e => setCalories(e.target.value)}
                                        placeholder="Wpisz liczbę kalorii"
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleAddDish} className="w-100">
                                    Dodaj Danie
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h2 onClick={() => setOpenHistory(!openHistory)} style={{ cursor: 'pointer' }}>
                        Historia Dodanych Dań {openHistory ? '▲' : '▼'}
                    </h2>
                    <Collapse in={openHistory}>
                        <Card>
                            <Card.Body>
                                {history.map((item, i) => (
                                    <div key={i} className="mb-2">
                                        {item.dishName} - {item.calories} kcal
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Col>
            </Row>

            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <h2 className="text-center mb-3">Kalendarz</h2>
                    <Card>
                        <Card.Body>
                            <Calendar
                                value={selectedDate}
                                onChange={setSelectedDate}
                                tileClassName={({ date }) => getDayColor(date)}
                                tileContent={tileContent}
                                className="w-100"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={6} className="text-center">
                    <Form.Label>Limit kalorii na dzień:</Form.Label>
                    <Form.Control
                        type="number"
                        value={limitCalories}
                        onChange={e => setLimitCalories(parseInt(e.target.value, 10))}
                        placeholder="Wpisz limit kalorii"
                        className="mx-auto"
                        style={{ maxWidth: '200px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Jadlospis;