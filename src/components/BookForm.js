import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
    const { addBooks } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addBooks(title, author)
        setTitle('')
        setAuthor('')
    }


    return (
        <form className="book--form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Book Title" onChange={(e) => {
                setTitle(e.target.value)
            }} value={title} required />
            <input type="text" placeholder="Enter Book Author" onChange={(e) => {
                setAuthor(e.target.value)
            }} value={author} required />
            <input type="submit" />
        </form>
    );
}

export default BookForm;