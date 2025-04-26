import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';  // Importujemy NavLink

export const Home = () => {
    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
            <Container>
                {/* Sekcja Przepisy */}
                <h2 className="text-center mb-5">Top Przepisy</h2>
                <Row>
                    {/* Przepis 1 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./przepisyimg/pizza.jpg" />
                            <Card.Body>
                                <Card.Title>Keto Pizza</Card.Title>
                                <Card.Text>
                                    Naprawdę, bardzo zbliżona wersja pizzy którą znamy! Uwaga mega serowa.
                                </Card.Text>
                                <Button variant="primary" href="/przepis1">Gotujemy</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Przepis 2 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./przepisyimg/gofry.jpg" />
                            <Card.Body>
                                <Card.Title>Keto Gofry</Card.Title>
                                <Card.Text>
                                    Jeśli ochota na słodkie nie przechodzi to musisz tego spróbować.
                                </Card.Text>
                                <Button variant="primary" href="/przepis2">Gotujemy</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Przepis 3 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./przepisyimg/gyros.jpg" />
                            <Card.Body>
                                <Card.Title>Keto Gyros</Card.Title>
                                <Card.Text>
                                    Wiemy, że tęsknicie za smakiem klasycznego gyrosa. To coś dla Ciebie.
                                </Card.Text>
                                <Button variant="primary" href="/przepis3">Gotujemy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Sekcja z najpopularniejszymi dietami */}
                <h2 className="text-center mb-5">Najpopularniejsze diety</h2>
                <Row>
                    {/* Dieta 1 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./dietyimg/dietaketo.jpg" />
                            <Card.Body>
                                <Card.Title>Dieta Ketogeniczna</Card.Title>
                                <Card.Text>
                                    Krótkie wprowadzenie do diety ketogenicznej. Dieta ta jest bogata w tłuszcze i uboga w węglowodany.
                                </Card.Text>
                                <Button variant="primary" href="/dieta-ketogeniczna">Więcej informacji</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Dieta 2 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./dietyimg/dietasr.jpg" />
                            <Card.Body>
                                <Card.Title>Dieta Śródziemnomorska</Card.Title>
                                <Card.Text>
                                    Dieta inspirowana stylem życia w krajach basenu Morza Śródziemnego.
                                </Card.Text>
                                <Button variant="primary" href="/dieta-srodziemnomorska">Więcej informacji</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Dieta 3 */}
                    <Col md={4} sm={6} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="./dietyimg/dietaroslinna.jpeg" />
                            <Card.Body>
                                <Card.Title>Dieta Roślinna</Card.Title>
                                <Card.Text>
                                    Dieta oparta głównie na roślinach, eliminująca mięso i produkty zwierzęce. Idealna dla wegetarian i wegan.
                                </Card.Text>
                                <Button variant="primary" href="/dieta-roslinna">Więcej informacji</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Sekcja "Słowo na dziś" */}
                <div className="text-center my-5" style={{ backgroundColor: '#e9ecef', padding: '30px', borderRadius: '10px' }}>
                    <h3>Słowo na dziś</h3>
                    <blockquote className="blockquote">
                        <p>"Wytrwałość to nie dążenie do celu, to sposób, w jaki do niego zmierzamy."</p>
                        <footer className="blockquote-footer">Albert Einstein</footer>
                    </blockquote>
                </div>

                {/* Sekcja "Wybrany artykuł" */}
                <div className="text-center my-5" style={{ backgroundColor: '#e9ecef', padding: '30px', borderRadius: '10px' }}>
                    <h3>Wybrany artykuł</h3>
                    <Card className="mx-auto" style={{ maxWidth: '600px' }}>
                        <Card.Img variant="top" src="./artykuly/carrots.jpg" />
                        <Card.Body>
                            <Card.Title>"Jak dieta wpływa na zdrowie?"</Card.Title>
                            <Card.Text>
                                Artykuł omawia wpływ diety na zdrowie, przedstawia najnowsze badania dotyczące odżywiania i zdrowych nawyków żywieniowych.
                            </Card.Text>
                            <Button variant="primary" href="/artykuł-o-dietach">Przeczytaj artykuł</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Przycisk do sekcji Przepisów i Kontakt */}
                <div className="text-center mt-5">
                    <NavLink to="/przepisy" className="btn btn-secondary mx-2">Przepisy</NavLink>
                    <NavLink to="/kontakt" className="btn btn-secondary mx-2">Kontakt</NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Home;
