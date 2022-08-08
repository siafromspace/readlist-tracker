import { BookContext } from "../context/BookContext";
import { useContext } from "react";
import { FaTrash, FaCheck } from "react-icons/fa"


const BookDetails = ({ title, author, id }) => {
    const { removeBooks, deleteBooks } = useContext(BookContext)
    return (
        <div className="book--detail">
            <div className="detail--text">
                <h2>{title}</h2>
                <p>{author}</p>
            </div>
            <div className="detail--icons">
                <FaTrash style={{ color: "red" }} onClick={() => deleteBooks(id)} />
                <FaCheck style={{ color: "green" }} onClick={() => removeBooks(id)} />
            </div>
        </div>
    );
}

export default BookDetails;