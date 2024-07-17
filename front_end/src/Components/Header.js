import { Link } from "react-router-dom";

export default function Header() {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav className="header d-flex">
      <div className="d-flex">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </div>
      <div className="d-flex">
        {!window.localStorage.getItem("email") ? (
          <>
            <Link to="/register" className="register-nav">
              Register
            </Link>
            <Link to="/login" className="register-nav">
              Log In
            </Link>
          </>
        ) : (
          <div className="register-nav" onClick={handleLogOut}>
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
}
