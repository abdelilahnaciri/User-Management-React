import { useEffect, useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [name = "", setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");
  // console.log(name);

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
    console.log(name);
  }, [props.name, props.email]);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    setEmailError(200);
    if (name.trim() === "" || password.length < 8 || password !== passwordR) {
      flag = false;
    } else {
      flag = true;
      try {
        if (flag) {
          let res = await axios.post(
            `http://127.0.0.1:8000/api/${props.endPoint}`,
            {
              name: name,
              email: email,
              password: password,
              password_confirmation: passwordR,
            }
          );
          if (res.status === 200) {
            props.hasLocalStorage &&
              window.localStorage.setItem("email", email);
            window.location.pathname = `/${props.navigate}`;
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
      <div className="register">
        <form onSubmit={Submit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.trim() === "" && accept && (
            <p className="error-msg">Username is Required</p>
          )}
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
          <label htmlFor="repassword">Repeat Password</label>
          <input
            id="repassword"
            type="password"
            placeholder="Repeat Password..."
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="error-msg">Password does not match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
