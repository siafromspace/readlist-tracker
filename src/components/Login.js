import "./auth.css"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorText, setErrorText] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            alert("Log In successful!")
            navigate("/")
            setIsAuth(true)
            localStorage.setItem("isAuth", true)
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
                <h2>Log In</h2>
                <div>
                    {errorText && <p className="error--text">{errorText}</p>}
                    <label>Email</label>
                    <input type="email" placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)} />
                </div>
                <button className="login" onClick={(e) => {
                    e.preventDefault()
                    login()
                }}>Log In</button>
                <p>OR</p>
                <button className="login-with-google-btn" onClick={(e) => {
                    e.preventDefault()
                    signInWithGoogle()
                }}>Sign In With Google</button>
                <p>Don't have an account? <Link to="/signup" className="auth--link">Sign Up</Link></p>
            </form>
        </main>
    );
}

export default Login;