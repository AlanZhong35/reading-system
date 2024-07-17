import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';
import BookCard from './BookCard';
import { Container, Row, Col } from 'react-bootstrap';

const BookTracker = () => {
    const [books, setBooks] = useState(() => {
        try {
            const storedBooks = localStorage.getItem('books');
            return storedBooks ? JSON.parse(storedBooks) : [];
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    });

    const addBook = (book) => {
        setBooks([...books, book]);
    }

    const deleteBook = (name) => {
        setBooks(books.filter(book => book.name !== name));
    }

    const updatePagesRead = (name, pagesRead) => {
        setBooks(
            books.map((book) =>
                book.name === name
                    ? { ...book, pagesRead: book.pagesRead + pagesRead }
                    : book
            )
        );
    }

    useEffect(() => {
        try {
            localStorage.setItem('books', JSON.stringify(books));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [books]);

    return (
        <>
            <Container>
                <Row>
                    <h1>Book Tracker</h1>
                    <BookForm addBook={addBook} />
                </Row>
                <br/>
                <Row className="justify-content-center">
                    {books.map((book) => (
                        <Col key={book.name} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <BookCard book={book} updatePagesRead={updatePagesRead} deleteBook={deleteBook}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default BookTracker;
