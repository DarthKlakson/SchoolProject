import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Towar = () => {
    return(
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                    <Button variant="primary" className="me-2">Dodaj</Button>
                    <Button variant="primary" className="me-2">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane Podstawowe">
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Rodzaj</option>
                                    <option value="1">Lek</option>
                                    <option value="2">Material</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                            </Col>
                        </Tab>
                        <Tab eventKey="grupaAnalityczna" title="Grupa analityczna">
                            Tab content for Profile
                        </Tab>
                        <Tab eventKey="uwagi" title="Contact" disabled>
                            Tab content for Contact
                        </Tab>
                    </Tabs> 
                </Row>

            </Form>
        </Container>
    )
}