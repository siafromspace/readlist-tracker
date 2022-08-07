import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookList from "./BookList";
import BookForm from "./BookForm";

const Pending = () => {
    const { books } = useContext(BookContext)
    return (
        <main className="pending">
            <h1>In Progress</h1>
            <p>You have {books.length} books to read</p>
            <BookList />
            <BookForm />
        </main>

    );
}

export default Pending;