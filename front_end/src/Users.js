import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  function deleteUser(id) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
  }

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <i
          className="fa fas fa-edit"
          style={{ paddingRight: "5px", color: "#74afb9", fontSize: "20px" }}
        ></i>
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
          <th>Id</th>
          <th>User</th>
          <th>Email</th>
          <th>Action</th>
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
