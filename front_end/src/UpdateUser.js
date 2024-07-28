import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  // console.log(name);

  const id = window.location.pathname.split("/").slice(-1)[0];
  // console.log(id);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (name.trim() === "" || password.length < 8 || password !== passwordR) {
      flag = false;
    } else {
      flag = true;
      try {
        if (flag) {
          let res = await axios.post(
            `http://127.0.0.1:8000/api/user/update/${id}`,
            {
              name: name,
              email: email,
              password: password,
              password_confirmation: passwordR,
            }
          );
          if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/dashboard/users";
          }
          // .then((t) => console.log(t));
        }
      } catch (err) {
        console.log("The User Has Not Been Updated");
      }
    }
  }
  return (
    <div className="parent">
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
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
