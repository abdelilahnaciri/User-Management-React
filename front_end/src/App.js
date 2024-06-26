import "./style.css";
import SignUp from "./SignUp";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
