import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(BookContext)
    return (
        <section className="book-list">
            {books.map(book => {
                return <BookDetails title={book.title} author={book.author} id={book.id} key={book.id} />
            })}
        </section>
    );
}

export default BookList;