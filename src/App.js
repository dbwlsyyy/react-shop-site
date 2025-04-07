import { useState } from 'react';
import './App.css';
import data from './data';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import Card from './components/Card';

function App() {
    const [shoes, setShoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row md={3}>
                        {shoes.map((a, i) => (
                            <Card shoes={a} key={i} i={i} />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
