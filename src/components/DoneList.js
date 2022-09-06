import { BookContext } from "../context/BookContext";
import { useContext } from "react";
import DoneDetails from "./DoneDetails";

const DoneList = () => {
    const { userCompletedBooks } = useContext(BookContext)
    return userCompletedBooks && (
        <section className="done-list">
            {userCompletedBooks.map(book => {
                return <DoneDetails title={book.title} author={book.author} id={book.id} key={book.id} />
            })}
        </section>
    );
}

export default DoneList;