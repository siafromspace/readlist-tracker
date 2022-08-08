import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(() => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })
    const [completedBooks, setCompletedBooks] = useState(() => {
        const localData = localStorage.getItem('completed books')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    useEffect(() => {
        localStorage.setItem('completed books', JSON.stringify(completedBooks))
    }, [completedBooks])

    const addBooks = (title, author) => {
        setBooks([...books, { title, author, id: nanoid() }])
    }

    const removeBooks = (id) => {
        alert("Congratulations on completing your book! You can find the record of this book on the 'Completed Books' tab.")
        setBooks(books.filter(book => book.id !== id))
        setCompletedBooks([...completedBooks, books.find(book => book.id === id)])
    }

    const deleteBooks = (id) => {
        const confirmed = window.confirm("Are you sure you want to permanently erase the record of this book?")
        if (confirmed) {
            setBooks(books.filter(book => book.id !== id))
        }
    }

    const deleteDoneBooks = (id) => {
        const confirmed = window.confirm("Are you sure you want to permanently erase the record of this book?")
        if (confirmed) {
            setCompletedBooks(completedBooks.filter(book => book.id !== id))
        }
    }

    return (
        <BookContext.Provider value={{ books, addBooks, removeBooks, completedBooks, deleteBooks, deleteDoneBooks }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;