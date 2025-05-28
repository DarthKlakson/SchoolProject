import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './DietyPageStyles.css';

const diets = [
    {
        id: 'keto',
        title: 'Dieta Keto',
        img: './dietyimg/dietaketo.jpg',
        description: `Dieta ketogeniczna oparta na bardzo niskiej podaży węglowodanów i wysokiej tłuszczów.
    Organizm wchodzi w stan ketozy, spalając tłuszcz jako główne źródło energii, co wspomaga szybką redukcję tkanki tłuszczowej,
    stabilizuje poziom glukozy i poprawia koncentrację. Wskazana dla osób z insulinoopornością, cukrzycą typu 2,
    a także jako wsparcie w leczeniu padaczki lekoopornej. Kluczowe składniki: awokado, oliwa z oliwek,
    tłuste ryby, orzechy, jaja i oleje MCT.`
    },
    {
        id: 'mediterranean',
        title: 'Dieta Śródziemnomorska',
        img: './dietyimg/dietasrod.jpg',
        description: `Styl życia wywodzący się z regionu Morza Śródziemnego, bogaty w warzywa, owoce, ryby,
    pełnoziarniste produkty zbożowe, orzechy i oliwę z oliwek. Wspiera zdrowie serca,
    zmniejsza ryzyko stanów zapalnych i chorób przewlekłych. Umiarkowane spożycie czerwonego wina
    i ograniczenie przetworzonej żywności sprzyja długowieczności i dobremu samopoczuciu.`
    },
    {
        id: 'plant',
        title: 'Dieta Roślinna',
        img: './dietyimg/dietaros.jpg',
        description: `Dieta wegańska oparta wyłącznie na produktach roślinnych: warzywach, owocach,
    roślinach strączkowych, orzechach i nasionach. Wysoka zawartość błonnika, witamin,
    minerałów i antyoksydantów wspiera układ pokarmowy i sercowo-naczyniowy. Pomaga obniżyć
    poziom cholesterolu LDL oraz dostarcza pełnowartościowego białka z tofu, tempehu,
    soczewicy i nasion chia. Zrównoważona, etyczna i przyjazna dla środowiska.`
    }
];

export const Diety = () => (
    <Container className="py-5">
        <h2 className="text-center mb-4 text-success">Diety</h2>
        <Row xs={1} md={3} className="g-4">
            {diets.map((diet, idx) => (
                <Col key={diet.id}>
                    <Card className="h-100">
                        <Card.Img
                            variant="top"
                            src={diet.img}
                            alt={diet.title}
                            className="diet-card-img"
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="text-center">{diet.title}</Card.Title>
                            <Card.Text className="flex-grow-1">
                                {diet.description}
                            </Card.Text>
                            <Button variant="warning" className="mt-3 mx-auto">
                                Dowiedz się więcej
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);