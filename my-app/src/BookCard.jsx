import React, { useState } from 'react';
import {Card, Button, Form, ProgressBar} from 'react-bootstrap';

const BookCard = ({ book, updatePagesRead, deleteBook}) => {
    const [pagesRead, setPagesRead] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!pagesRead){
            return
        }
        updatePagesRead(book.name, parseInt(pagesRead))
        setPagesRead('')
      }

    const handleDelete = () => {
        deleteBook(book.name); // Pass the identifier of the book you want to delete
    }

    const progress = (book.pagesRead / book.totalPages) * 100; // Calculate progress percentage

    return (
        <Card>
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>Total Pages: {book.totalPages}</Card.Text>
                <Card.Text>Pages Read: {book.pagesRead}</Card.Text>
                <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
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
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Form>
            </Card.Body>
        </Card>
    )

}

export default BookCard;
