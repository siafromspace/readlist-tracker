import { createContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs, doc, deleteDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "../firebase-config"

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([])
    const [completedBooks, setCompletedBooks] = useState([])
    const [userBooks, setUserBooks] = useState([])
    const [userCompletedBooks, setUserCompletedBooks] = useState([])
    const [user, setUser] = useState([])

    //const isAuth = localStorage.getItem("isAuth")

    // const userName = isAuth === true && auth.currentUser.displayName === null ? `${firstName} ${lastName}` : auth.currentUser.displayName

    const booksCollectionRef = collection(db, "books")
    const usersCollectionRef = collection(db, "users")
    const completedBooksCollectionRef = collection(db, "completedBooks")

    const addBooks = async (title, author) => {
        await addDoc(booksCollectionRef, {
            title: title,
            author: author,
            user: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            },
            timestamp: serverTimestamp()
        })
    }

    const addUsers = async (firstName, lastName) => {
        await addDoc(usersCollectionRef, {
            firstName: firstName,
            lastName: lastName,
            id: auth.currentUser.uid
        })
    }

    const removeBooks = async (id) => {
        alert("Congratulations on completing your book! You can find the record of this book on the 'Completed Books' tab.")
        const bookDoc = doc(db, "books", id)
        const bookData = await getDoc(bookDoc)
        console.log(bookData)
        await addDoc(completedBooksCollectionRef, { ...bookData.data() })
        await deleteDoc(bookDoc)
    }

    const deleteBooks = async (id) => {
        const confirmed = window.confirm("Are you sure you want to permanently erase the record of this book?")
        if (confirmed) {
            const bookDoc = doc(db, "books", id)
            await deleteDoc(bookDoc)
        }
    }

    const deleteDoneBooks = async (id) => {
        const confirmed = window.confirm("Are you sure you want to permanently erase the record of this book?")
        if (confirmed) {
            const completedBookDoc = doc(db, "completedBooks", id)
            await deleteDoc(completedBookDoc)
        }
    }
    useEffect(() => {
        const getBooks = async () => {
            const data = await getDocs(booksCollectionRef)
            setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            auth.currentUser && setUserBooks(books.filter(book => auth.currentUser.uid === book.user.id))
        }
        getBooks()
    }, [booksCollectionRef, books])


    useEffect(() => {
        const getCompletedBooks = async () => {
            const data = await getDocs(completedBooksCollectionRef)
            setCompletedBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            auth.currentUser && setUserCompletedBooks(completedBooks.filter(book => auth.currentUser.uid === book.user.id))
        }
        getCompletedBooks()
    }, [completedBooksCollectionRef, completedBooks])

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef)
    //         const users = data.docs.map((doc) => ({ ...doc.data() }))
    //         setUser(users.filter(user => user.id === auth.currentUser.uid))
    //     }
    //     getUsers()
    // }, [])


    return (
        <BookContext.Provider value={{ books, addBooks, removeBooks, completedBooks, deleteBooks, deleteDoneBooks, userBooks, userCompletedBooks, addUsers, user, setUser }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;