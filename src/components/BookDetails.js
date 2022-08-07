import { BookContext } from "../context/BookContext";
import { useContext } from "react";


const BookDetails = ({ title, author, id }) => {
    const { removeBooks } = useContext(BookContext)
    return (
        <div onClick={() => removeBooks(id)}>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    );
}

export default BookDetails;