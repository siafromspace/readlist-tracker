import Home from "./components/Home";
import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import Pending from "./components/Pending";
import Completed from "./components/Completed";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.css"

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return (
    <BrowserRouter>
      <div className="App">
        <BookContextProvider>
          <Navbar isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home isAuth={isAuth} />}></Route>
            <Route path="/Pending" element={<Pending isAuth={isAuth} />}></Route>
            <Route path="/Completed" element={<Completed isAuth={isAuth} />}></Route>
            <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
            <Route path="/signup" element={<Signup isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
            <Route path="/logout" element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
          </Routes>
        </BookContextProvider>

      </div>
    </BrowserRouter>
  );
}

export default App;
