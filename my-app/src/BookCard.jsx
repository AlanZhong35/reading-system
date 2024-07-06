import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const BookCard = ({ book, updatePagesRead}) => {
    const [pagesRead, setPagesRead] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!pagesRead){
            return
        }
        updatePagesRead(book.name, parseInt(pagesRead))
        setPagesRead('')
      }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>Total Pages: {book.totalPages}</Card.Text>
                <Card.Text>Pages Read: {book.pagesRead}</Card.Text>
                <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formPagesRead">
                <Form.Control
                type="number"
                placeholder="Enter pages read"
                value={pagesRead}
                onChange={(e) => setPagesRead(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Progress
            </Button>
            </Form>
            </Card.Body>
        </Card>
    )

}

export default BookCard;
