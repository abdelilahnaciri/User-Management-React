import Form from "./Components/Form";
import { useEffect, useState } from "react";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  return (
    <div className="parent">
      <div className="register">
        <Form
          name={name}
          email={email}
          endPoint={`user/update/${id}`}
          hasLocalStorage={false}
          navigate="dashboard/users"
        />
      </div>
    </div>
  );
}
