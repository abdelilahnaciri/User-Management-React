import { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");
  // console.log(name);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    setEmailError(200);
    if (password.length < 8) {
      flag = false;
    } else {
      flag = true;
      try {
        if (flag) {
          let res = await axios.post("http://127.0.0.1:8000/api/login", {
            email: email,
            password: password,
          });
          if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/";
          }
          // .then((t) => console.log(t));
        }
      } catch (err) {
        setEmailError(err.response.status);
      }
    }
  }
  return (
    <div>
      <Header />
      <div className="parent">
        <div className="register">
          <form onSubmit={Submit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError === 422 && accept && (
              <p className="error-msg">Email is already been taken</p>
            )}
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error-msg">Password must be more than 8 chars</p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
