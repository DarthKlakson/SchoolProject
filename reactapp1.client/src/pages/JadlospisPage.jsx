import React, { useState, useEffect } from 'react';
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
    const [showModal, setShowModal] = useState(false);
    const [history, setHistory] = useState([]); 
    const [openHistory, setOpenHistory] = useState(false); 


    const handleAddDish = () => {
        const newDish = {
            dishName,
            products,
            calories: parseInt(calories, 10),
            date: selectedDate,
        };

        
        setHistory([...history, newDish]);

        
        const dateString = selectedDate.toDateString();
        const newCaloriesForDay = { ...caloriesForDay };

        if (!newCaloriesForDay[dateString]) {
            newCaloriesForDay[dateString] = [];
        }

        newCaloriesForDay[dateString].push(newDish);
        setCaloriesForDay(newCaloriesForDay);

       
        setDishName('');
        setProducts('');
        setCalories('');
        setShowModal(false);
    };

    
    const getDayColor = (date) => {
        const dateString = date.toDateString();
        const totalCalories = caloriesForDay[dateString]
            ? caloriesForDay[dateString].reduce((acc, item) => acc + item.calories, 0)
            : 0;

        if (totalCalories > limitCalories) {
            return 'bg-danger'; 
        } else if (totalCalories > 0) {
            return 'bg-success'; 
        } else {
            return ''; 
        }
    };

   
    const tileContent = ({ date }) => {
        const dateString = date.toDateString();
        const dishes = caloriesForDay[dateString] || [];
        return (
            <div style={{ textAlign: 'center', fontSize: '12px', padding: '3px' }}>
                {dishes.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {dishes.map((dish, index) => (
                            <li key={index}>
                                {dish.dishName} - {dish.calories} kcal
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    
    const calendarWrapperStyle = {
        width: '100%',
        maxWidth: '100%'
    };

   
    const calendarStyle = {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        fontSize: '16px'
    };

    return (
        <Container>
          
            <h2 className="text-center my-5">Dodaj Danie do Jadłospisu</h2>
            <Card className="mb-4">
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nazwa Dania</Form.Label>
                            <Form.Control
                                type="text"
                                value={dishName}
                                onChange={(e) => setDishName(e.target.value)}
                                placeholder="Wpisz nazwę dania"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Produkty</Form.Label>
                            <Form.Control
                                type="text"
                                value={products}
                                onChange={(e) => setProducts(e.target.value)}
                                placeholder="Wpisz produkty"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Kalorie</Form.Label>
                            <Form.Control
                                type="number"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                placeholder="Wpisz liczbę kalorii"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddDish} style={{ marginTop: '15px' }}>
                            Dodaj Danie
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            
            <h2 className="text-center my-5" onClick={() => setOpenHistory(!openHistory)} style={{ cursor: 'pointer' }}>
                Historia Dodanych Dań {openHistory ? '▲' : '▼'}
            </h2>

            <Collapse in={openHistory}>
                <Card className="mb-4">
                    <Card.Body>
                        <ul>
                            {history.map((item, index) => (
                                <li key={index}>
                                    {item.dishName} - {item.calories} kcal
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </Collapse>

            
            <h2 className="text-center my-5">Kalendarz</h2>

            <Card className="mb-4">
                <Card.Body>
                    <div style={calendarWrapperStyle} className="custom-calendar-wrapper">
                        <Calendar
                            value={selectedDate}
                            onChange={setSelectedDate}
                            tileClassName={({ date }) => getDayColor(date)}
                            tileContent={tileContent}
                            className="custom-calendar" 
                            style={calendarStyle}
                        />
                    </div>
                </Card.Body>
            </Card>

            
            <div className="text-center my-4">
                <Form.Label>Limit kalorii na dzień:</Form.Label>
                <Form.Control
                    type="number"
                    value={limitCalories}
                    onChange={(e) => setLimitCalories(parseInt(e.target.value))}
                    placeholder="Wpisz limit kalorii"
                    style={{ width: '200px', margin: '0 auto' }}
                />
            </div>
        </Container>
    );
};

export default Jadlospis;