import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookList from "./BookList";
import BookForm from "./BookForm";

const Pending = () => {
    const { books } = useContext(BookContext)
    return (
        <main className="pending">
            <h1>In Progress</h1>
            {books.length > 0 ? <p>You are currently reading {books.length} books</p> : <p>Congratulations, You have completed your reading list! Start a new read by filling the form below.</p>}
            <BookList />
            <BookForm />
        </main>

    );
}

export default Pending;