import { FaHome, FaBook, FaCheckDouble } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: isActive ? "4px solid black" : ""
                    }
                }}
                to="/"><FaHome /></NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: isActive ? "4px solid black" : ""
                    }
                }}
                to="/Pending"><FaBook /></NavLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        borderRight: isActive ? "4px solid black" : ""
                    }
                }}
                to="/Completed"><FaCheckDouble /></NavLink>
        </nav>
    );
}

export default Navbar;