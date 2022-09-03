import { BookContext } from "../context/BookContext";
import { useContext } from "react";
import DoneList from "./DoneList";

const Completed = ({ isAuth }) => {
    const { completedBooks } = useContext(BookContext)
    if (!isAuth) {
        return (
            <main>
                <h1>You need to log in.</h1>
            </main>)
    }
    return (
        <main>
            <h1>Completed</h1>
            <p>You have completed {completedBooks.length} books</p>
            <DoneList />
        </main>
    );
}

export default Completed;