import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home">
            <h1>Start Your Journey With Books</h1>
            <p>"A reader lives a thousand lives before he dies. a man who never reads lives one."</p>
            <button className="new"><Link to="/Pending">Add new book</Link></button>
        </main>
    );
}

export default Home;