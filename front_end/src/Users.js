import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [runUseEffect, setUseEffect] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [runUseEffect]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/user/showbyid/14")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  async function deleteUser(id) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}`
      );
      if (res.status === 200) {
        setUseEffect((prev) => prev + 1);
        console.log("done!");
      }
    } catch {
      console.log("Can't Find Any Data !");
    }
  }

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`${user.id}`}>
          <i
            className="fa fas fa-edit"
            style={{ paddingRight: "5px", color: "#74afb9", fontSize: "20px" }}
          ></i>
        </Link>
        <i
          className="fa fas fa-trash"
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
          onClick={() => deleteUser(user.id)}
        ></i>
      </td>
    </tr>
  ));
  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showUsers}
          {/* <tr>
            <td>1</td>
            <td>AbdelilahNcr</td>
            <td>abdelilahnaciri1221@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ahmed</td>
            <td>ahmed123@gmail.com</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
