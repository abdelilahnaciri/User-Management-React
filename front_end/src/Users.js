import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const showUsers = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));
  return (
    <div style={{ padding: "20px" }}>
      <table>
        <thead>
          <th>Id</th>
          <th>User</th>
          <th>Email</th>
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
