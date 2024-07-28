import SignUp from "./SignUp";
// import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Users from "./Users";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
