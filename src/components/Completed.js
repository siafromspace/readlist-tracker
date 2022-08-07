import { BookContext } from "../context/BookContext";
import { useContext } from "react";
import DoneList from "./DoneList";

const Completed = () => {
    const { completedBooks } = useContext(BookContext)
    return (
        <main>
            <h1>Completed</h1>
            <p>You have completed {completedBooks.length} books</p>
            <DoneList />
        </main>
    );
}

export default Completed;