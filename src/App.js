import Home from "./components/Home";
import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import Pending from "./components/Pending";
import Completed from "./components/Completed";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <BookContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Pending" element={<Pending />}></Route>
            <Route path="/Completed" element={<Completed />}></Route>
          </Routes>
        </BookContextProvider>

      </div>
    </BrowserRouter>
  );
}

export default App;
