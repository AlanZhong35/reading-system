import React from 'react'
import './App.css'
import Dashboard from './Dashboard';
import Home from './Home.jsx';
import BookTracker from "./BookTracker.jsx";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';

function App() {
//tried to stick the navbar to the top with inline style
  return (
    <>
        <Router>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/reading-system">Alan's Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/reading-system/salary-predictor" >NBA Salary Predictor</Nav.Link>
                        <Nav.Link as={NavLink} to="/reading-system/book-tracker" >Book Tracker</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path="/reading-system" element={<Home/>}/>
                <Route path="/reading-system/salary-predictor" element={<Dashboard/>}/>
                <Route path="/reading-system/book-tracker" element={<BookTracker/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
  );
}

function NotFound() {
    return <h1>Not Found</h1>;
}

export default App
