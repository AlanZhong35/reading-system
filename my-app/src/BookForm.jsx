import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';


const BookForm = ({ addBook }) => {

    const [name, setName] = useState("")
    const [totalPages, setTotalPages] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ name, totalPages: parseInt(totalPages), pagesRead: 0 })
    }

    return (
        <Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="formTotalPages">
          <Form.Label>Total Pages</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter total pages"
            value={totalPages}
            onChange={(e) => setTotalPages(e.target.value)}
          />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
      </Card>
    );
  };

export default BookForm;