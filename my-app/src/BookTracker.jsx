import React, { useState } from 'react';
import BookForm from './BookForm';
import BookCard from './BookCard';
import { Container, Row, Col } from 'react-bootstrap';

const BookTracker = () => {

    const [books, setBooks] = useState([])

    const addBook = (book) => {
        setBooks([...books, book]);
    }

    const updatePagesRead = (name, pagesRead) => {
        setBooks(
            books.map((book) =>
                book.name === name
                    ? { ...book, pagesRead: book.pagesRead + pagesRead }
                    : book
            )
        )
    }

    return(
        <>
            <Container>
                <Row>
                    <h1>Book Tracker</h1>
                    <BookForm addBook={addBook} />
                </Row>
                <Row className="justify-content-center">
                    {books.map((book) => (
                        <Col key={book.name} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <BookCard book={book} updatePagesRead={updatePagesRead} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default BookTracker;