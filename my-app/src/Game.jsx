import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GodotGame = () => {
  return (
    <Container className="my-4" fluid>
      <Row className="justify-content-center">
        <Col md={12}>
              <iframe
                title="Godot Game"
                src="first-game/game.html"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ width: '90vh', height: '90vh', border: 'none' }}
                allowFullScreen
              ></iframe>
              <br></br>
              <text>Credit to Brackey's <a href="https://www.youtube.com/watch?v=LOhfqjmasi0">Godot Tutorial</a></text>
        </Col>
      </Row>
    </Container>
  );
};

export default GodotGame;
