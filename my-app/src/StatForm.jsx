import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

const StatForm = () => {
    const [formData, setFormData] = useState({
        PTS: '',
        AST: '',
        TRB: '',
        STL: '',
        BLK: '',
        '3P%': ''
    });

    const [prediction, setPrediction] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const requestData = {
            PTS: [parseFloat(formData.PTS)],
            AST: [parseFloat(formData.AST)],
            TRB: [parseFloat(formData.TRB)],
            STL: [parseFloat(formData.STL)],
            BLK: [parseFloat(formData.BLK)],
            '3P%': [parseFloat(formData['3P%'])]
        };

        try {
            const response = await fetch('https://reading-system.onrender.com/getPredictionOutput', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            const data = await response.json()
            setPrediction(data.predict)
        } catch (error) {
            console.error('Error:', error)
        }finally {
            setLoading(false)
        }
    };

    const formatSalary = (salary) => {
        return parseFloat(salary).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">NBA Salary Predictor</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    {Object.keys(formData).map((key) => (
                        <Col sm={6} key={key}>
                            <Form.Group controlId={key}>
                                <Form.Label>{key}</Form.Label>
                                <Form.Control
                                    type="number"
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    ))}
                </Row>
                <br/>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />{' '}
                            Loading...
                        </>
                    ) : (
                        'Predict Salary'
                    )}
                </Button>
            </Form>
            {prediction !== null && (
                <div className="mt-4">
                     <h4>Predicted Salary: {formatSalary(prediction.toFixed(2))}</h4>
                </div>
            )}
        </Container>
    );
};

export default StatForm;