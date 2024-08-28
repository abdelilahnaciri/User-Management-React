import Form from "./Components/Form";
import Header from "./Components/Header";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="parent">
        <Form endPoint="register" navigate="" />
      </div>
    </div>
  );
}
