import "./style.css";
import SignUp from "./SignUp";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
