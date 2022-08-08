import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Six Of crows', author: 'Leigh Bardugo', id: nanoid() },
        { title: 'Six Of crows', author: 'Leigh Bardugo', id: nanoid() },
        { title: 'Six Of crows', author: 'Leigh Bardugo', id: nanoid() }
    ])
    const [completedBooks, setCompletedBooks] = useState([])

    const addBooks = (title, author) => {
        setBooks([...books, { title, author, id: nanoid() }])
    }

    const removeBooks = (id) => {
        setBooks(books.filter(book => book.id !== id))
        setCompletedBooks([...completedBooks, books.find(book => book.id === id)])
    }

    const deleteBooks = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    const deleteDoneBooks = (id) => {
        setCompletedBooks(completedBooks.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{ books, addBooks, removeBooks, completedBooks, deleteBooks, deleteDoneBooks }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;