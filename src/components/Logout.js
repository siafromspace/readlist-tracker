import { auth } from "../firebase-config"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const signUserOut = () => {
        const confirmed = window.confirm("Are you sure you want to log out?")
        if (confirmed) {
            signOut(auth).then(() => {
                localStorage.clear()
                setIsAuth(false)
                navigate("/")
            })
        }

    }
    const signOutExit = () => {
        navigate("/")
    }

    return (
        <main>
            <h1>Log out ?</h1>
            <div className="signout">
                <button onClick={signUserOut}>Yes</button>
                <button onClick={signOutExit}>No</button>
            </div>
        </main>
    );
}

export default Logout;