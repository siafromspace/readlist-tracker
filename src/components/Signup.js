import "./auth.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { BookContext } from "../context/BookContext";

const Signup = ({ setIsAuth }) => {
    const { addUsers } = useContext(BookContext)
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errorText, setErrorText] = useState("")
    const navigate = useNavigate()

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            alert("Sign Up successful!")
            navigate("/")
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            addUsers(firstName, lastName)
        } catch (error) {
            console.log(error.message);
            setErrorText(error.message)
        }
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            navigate("/")
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
        })
    }

    return (
        <main>
            <form>
                <h2>Sign Up</h2>
                <div>
                    {errorText && <p className="error--text">{errorText}</p>}
                    <label>First Name</label>
                    <input type="text" placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} value={registerEmail} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password"
                        onChange={(e) => setRegisterPassword(e.target.value)} value={registerPassword} />
                </div>
                <button className="sign--up" onClick={(e) => {
                    e.preventDefault()
                    signup()
                }}>Sign Up</button>
                <p>OR</p>
                <button className="login-with-google-btn" onClick={(e) => {
                    e.preventDefault()
                    signInWithGoogle()
                }}>Sign In With Google</button>
                <p>Already have an account? <Link to="/login" className="auth--link">Log In</Link></p>
            </form>
        </main>
    )
}

export default Signup;