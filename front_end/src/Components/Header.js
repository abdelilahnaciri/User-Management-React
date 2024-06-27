import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header d-flex">
      <div className="d-flex">
        <h6>Home</h6>
        <h6>About</h6>
      </div>
      <div className="d-flex">
        <Link to="/register" className="register-nav">
          Register
        </Link>
        <Link to="/login" className="register-nav">
          Log in
        </Link>
      </div>
    </nav>
  );
}
