import { useEffect, useState } from 'react';
import './App.module.css';
import data from './data';
import { Navbar, Container, Row, Col, Nav, Button } from 'react-bootstrap';
import Card from './components/Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import styles from './App.module.css';
import axios from 'axios';

function App() {
    const [shoes, setShoes] = useState(data);
    const [count, setcount] = useState(2);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {}, [loading]);

    return (
        <div className={styles.App}>
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
                            <div className={styles['main-bg']}></div>
                            <div>
                                <Container>
                                    <Row md={3}>
                                        {shoes.map((a, i) => (
                                            <Card shoes={a} key={i} i={i} />
                                        ))}
                                    </Row>
                                    {loading ? (
                                        <strong m-3>loading...</strong>
                                    ) : (
                                        ''
                                    )}
                                </Container>
                            </div>
                            {count <= 3 ? (
                                <Button
                                    onClick={() => {
                                        setloading(true);
                                        axios
                                            .get(
                                                `https://codingapple1.github.io/shop/data${count}.json`
                                            )
                                            .then((res) => {
                                                setShoes([
                                                    ...shoes,
                                                    ...res.data,
                                                ]);
                                                setcount((prev) => prev + 1);
                                                setloading(false);
                                                console.log('count : ', count);
                                            })
                                            .catch(() => {
                                                console.log('실패함');
                                                setloading(false);
                                            });
                                    }}
                                >
                                    more
                                </Button>
                            ) : (
                                ''
                            )}
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
