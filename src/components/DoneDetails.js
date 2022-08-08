import { useContext } from "react";
import { FaTrash } from "react-icons/fa"
import { BookContext } from "../context/BookContext";

const DoneDetails = ({ title, author, id }) => {
    const { deleteDoneBooks } = useContext(BookContext)
    return (
        <div className="book--detail">
            <div className="detail--text">
                <h2>{title}</h2>
                <p>{author}</p>
            </div>
            <div className="detail--icons">
                <FaTrash style={{ color: "red" }} onClick={() => deleteDoneBooks(id)} />
            </div>
        </div>
    );
}

export default DoneDetails;