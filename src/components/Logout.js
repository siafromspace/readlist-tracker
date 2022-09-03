import { auth } from "../firebase-config"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/")
        })
    }
    const confirmed = window.confirm("Are you sure you want to log out?")
    if (confirmed) {
        signUserOut()
    }
    return null;
}

export default Logout;