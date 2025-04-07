import { useState } from 'react';
import './App.module.css';
import data from './data';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import Card from './components/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
    const [shoes, setShoes] = useState(data);
    const navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/detail">
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
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
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

                <Route path="*" element={<div>404 ERROR - Invalid URL </div>} />
            </Routes>
        </div>
    );
}

export default App;
