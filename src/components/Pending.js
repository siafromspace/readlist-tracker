import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookList from "./BookList";
import BookForm from "./BookForm";

const Pending = ({ isAuth }) => {
    const { userBooks } = useContext(BookContext)
    if (!isAuth) {
        return (
            <main className="pending">
                <h1>You need to log in.</h1>
            </main>)
    }
    return userBooks && (
        <main className="pending">
            <h1>In Progress</h1>
            {userBooks.length > 0 ? <p>You are currently reading {userBooks.length} books</p> : <p>You have zero books on your reading list! Start a new read by filling the form below.</p>}
            <BookList />
            <BookForm />
        </main>

    );
}

export default Pending;