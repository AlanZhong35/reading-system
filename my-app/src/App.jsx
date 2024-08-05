import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import BookTracker from "./BookTracker";
import AboutMe from './AboutMe';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar  fixed="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/reading-system/">Alan's Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="/reading-system/salary-predictor">NBA Salary Predictor</Nav.Link>
                            <Nav.Link as={NavLink} to="/reading-system/book-tracker">Book Tracker</Nav.Link>
                            <Nav.Link as={NavLink} to="/reading-system/about-me">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="content">
                <Routes>
                    <Route path="/reading-system/" element={<Home />} />
                    <Route path="/reading-system/salary-predictor" element={<Dashboard />} />
                    <Route path="/reading-system/book-tracker" element={<BookTracker />} />
                    <Route path="/reading-system/about-me" element={<AboutMe />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Router>
    );
}

function NotFound() {
    return <h1>Not Found</h1>;
}

export default App;
