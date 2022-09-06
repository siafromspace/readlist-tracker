//import { useContext } from "react";
import { Link } from "react-router-dom";
import Books from "../books.svg"
//import { BookContext } from "../context/BookContext";


const Home = ({ isAuth }) => {
    // const { user } = useContext(BookContext)
    return (
        <main className="home">
            <img src={Books} alt="books" className="home--img" />
            <h1>
                {/* {isAuth && `Hello, ${user[0].firstName}. `} */}
                Start Your Journey With Books</h1>
            <p>"A reader lives a thousand lives before he dies. a man who never reads lives one."</p>
            {isAuth ?
                <button className="new"><Link to="/Pending">Add new book</Link></button> :
                <div>
                    <button><Link to="/login">Log In</Link></button>
                    <button><Link to="/signup">Sign Up</Link></button>
                </div>}
        </main>
    );
}

export default Home;