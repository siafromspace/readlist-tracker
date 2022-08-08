import { FaHome, FaBook, FaCheckDouble } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
    const { books } = useContext(BookContext)

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 696px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 696px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <nav>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: (!matches && isActive) && "4px solid #262322",
                        borderTop: (matches && isActive) && "4px solid #262322"
                    }
                }}
                to="/"><FaHome /></NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: !matches && isActive ? "4px solid #262322" : "",
                        borderTop: matches && isActive ? "4px solid #262322" : ""
                    }
                }}
                to="/Pending"><FaBook />{books.length > 0 && <div>{books.length}</div>}</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: !matches && isActive ? "4px solid #262322" : "",
                        borderTop: matches && isActive ? "4px solid #262322" : ""
                    }
                }}
                to="/Completed"><FaCheckDouble /></NavLink>
        </nav>
    );
}

export default Navbar;